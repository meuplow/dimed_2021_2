import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {
  colunas: string[] = ['id', 'name'];
  usuario: Usuario[] = [
    {
      id: '1',
      name: 'João',
      job: 'Desenvolvedor',
      createdAt: new Date()
    },
    {
      id: '2',
      name: 'Maria',
      job: 'Desenvolvedor',
      createdAt: new Date()
    },
    {
      id: '3',
      name: 'Fulano',
      job: 'Analista',
      createdAt: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
