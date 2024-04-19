import { MEAT_API } from './../app.api';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarrinhoService } from '../detalhes-restaurante/carrinho/carrinho.service';
import { CarrinhoItem } from '../detalhes-restaurante/carrinho/carrinho';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';
import { map } from 'rxjs/operators';
import { response } from 'express';
import { request } from 'http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private carrinhoService : CarrinhoService, private http: HttpClient) {

  }

  carrinhoItens(): CarrinhoItem[]{
    return this.carrinhoService.items
  }

  addQntd(item: CarrinhoItem){
    this.carrinhoService.addQntd(item)
  }

  subtrairQntd(item: CarrinhoItem){
    this.carrinhoService.subtrairQntd(item)
  }

  removerItem(item: CarrinhoItem){
    this.carrinhoService.removerItem(item)
  }

  valorItem(): number{
    return this.carrinhoService.total()
  }

  clear(){
    this.carrinhoService.clear()
  }

  checarPedido(pedido : Pedido): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<string>(`${MEAT_API}/orders`, JSON.stringify(pedido), { headers: headers })
      .pipe(
        map(response => response) // ou response => response.json() se você precisar desserializar o JSON
      );
  }
}
