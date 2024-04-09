import { throwError} from 'rxjs';
import { Response } from "express";

export class ErrorHandler{
  static handleError(erro: Response | any){
    let mensagemErro: string
    if(erro instanceof Response){
      mensagemErro = `Erro ${erro.status} ao acessar a URL ${erro.url} - ${erro.statusText}`
    }else{
      mensagemErro = erro.toString()
    }
    console.error(mensagemErro)
    return throwError(()=> new Error(mensagemErro).toString())
  }
}
/*() => new Error(mensagemErro) é uma função de flecha que não aceita nenhum argumento e retorna um novo objeto de erro com a mensagem mensagemErro.
Quando você passa essa função para throwError, você está fornecendo uma "função de fábrica" que será invocada quando o Observable for assinado.
Isso é útil porque permite que o erro seja criado no momento em que o Observable é assinado*/
