import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { USERS_API_URL } from '../utils/rest';
import { UsuarioCadastrado, UsuarioCadastro } from '../models/usuario.model';
import { ConsultaPaginada } from '../models/consultapaginada.model';
import { UsuarioDetalhe } from '../models/usuariodetalhe.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: RestapiService) { }

  public buscarTodos(){
    return this.api.get<ConsultaPaginada>(USERS_API_URL);
  }

  public buscarUsuario(id: string){
    return this.api.get<UsuarioDetalhe>(USERS_API_URL+'/'+id);
  }

  public cadastrar(usuario: UsuarioCadastro){
    return this.api.post<UsuarioCadastrado>(USERS_API_URL, usuario);
  }
}
