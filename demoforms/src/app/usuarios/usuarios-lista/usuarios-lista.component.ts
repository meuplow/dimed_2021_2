import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private usuarioServices: UsuarioService, private router: Router) { }

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

  goToDetail(id: string){
    this.router.navigate(['usuarios', 'detalhar', id]);
  }

}


