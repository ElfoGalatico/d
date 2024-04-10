import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Restaurante } from "./restaurante/restaurante";

import { MEAT_API } from "../app.api";
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantesService {

  constructor(private http: HttpClient) { }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`).pipe(//retornando o Observable<Restaurante[]> diretamente, sem a necessidade de mapear a resposta para JSON. O Angular e o HttpClient cuidarão disso automaticamente para você.
    catchError(ErrorHandler.handleError))
  }

  restaurantesById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`)
  }



}
//O operador .pipe() é usado para compor operadores no RxJS. Ele permite que você encadeie uma série de operadores para transformar, filtrar, combinar ou manipular os dados emitidos por um Observable.
