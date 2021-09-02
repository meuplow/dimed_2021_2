import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {

  dadosUsuarioForm = this.fb.group({
    name:  ['', [Validators.required, Validators.maxLength(100)]],
    job: ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const dadosUsuario = this.dadosUsuarioForm.value;
    console.log(dadosUsuario);
    this.usuarioService.cadastrar(dadosUsuario).subscribe(
      resultado => {
        console.log(resultado);
        this.router.navigate(['/usuarios']);
      },
      erro => {
        console.log(erro);
        alert('Erro ao cadastrar usuário');
      }
    );
  }

}
