import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsultaPaginada, Usuario} from 'src/app/models/consultapaginada.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {
  colunas: string[] = ['id', 'name'];
  usuarios: Usuario[] = [];

  constructor(private usuarioServices: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioServices.buscarTodos().subscribe(
      dados => {
        console.log(dados);
        this.usuarios = dados.data;
      },
      erro => {
        console.log(erro);
        alert('Erro ao buscar usuários');
        this.usuarios = [];
      }
    );
  }

}


