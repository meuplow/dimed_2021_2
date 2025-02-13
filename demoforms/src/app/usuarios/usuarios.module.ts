import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UsuariosDetalheComponent } from './usuarios-detalhe/usuarios-detalhe.component';




@NgModule({
  declarations: [
    UsuariosCadastroComponent,
    UsuariosListaComponent,
    UsuariosDetalheComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
