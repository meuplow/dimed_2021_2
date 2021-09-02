import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export const USERS_API_URL = environment.apiUsuarios;

export function tratadorDeErros(erro: HttpErrorResponse){
  let msg = '';

  if (erro.error instanceof ErrorEvent){
    // Erro aconteceu no lado do client
    msg = `Ocorreu um erro: ${erro.error.message}`;
  } else {
    // Erro aconteceu no lado do server
    msg = `O servidor retornou o erro: ${erro.status} ${erro.statusText}`;
  }

  return throwError({
    erro: erro.error,
    mensagem: msg,
    mensagemOriginal: erro.message
  })
}
