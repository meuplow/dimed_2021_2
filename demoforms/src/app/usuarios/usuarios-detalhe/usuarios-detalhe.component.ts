import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioDetalhe } from 'src/app/models/usuariodetalhe.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  public usuario: UsuarioDetalhe | undefined;
  private usuarioSubscription: Subscription | undefined;
  private usuarioId: string = '';

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) {
    this.usuarioId = this.route.snapshot.params['id'];
    if(this.usuarioId){
      this.usuarioSubscription = this.usuarioService.buscarUsuario(this.usuarioId).subscribe(data =>{
        this.usuario = data;
        console.log(this.usuario.data.first_name);
      },
      erro =>{
        console.log(erro);
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.usuarioSubscription){
      this.usuarioSubscription.unsubscribe();
    }
  }

}
