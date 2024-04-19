import { CarrinhoItem } from './../detalhes-restaurante/carrinho/carrinho';
import { Component, OnInit } from '@angular/core';
import { Radio } from '../shared/radio/radio';
import { PedidoService } from './pedido.service';
import { ItemPedido, Pedido } from './pedido';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit{

  delivery: number = 8

  formasPagamento: Radio[] = [
    {label: 'Dinheiro', valor: 'Din'},
    {label: 'Cartão de Débito', valor: 'cardDeb'},
    {label: 'Cartão de Crédito', valor: 'cardCred'}

  ]

  constructor(private pedidoService: PedidoService, private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  valorItem(): number{
    return this.pedidoService.valorItem()
  }

  carrinhoItem(): CarrinhoItem[]{
    return this.pedidoService.carrinhoItens()
  }

  addqntd(item: CarrinhoItem){
    this.pedidoService.addQntd(item)
  }

  subtrairQntd(item:CarrinhoItem){
    this.pedidoService.subtrairQntd(item)
  }

  removerItem(item:CarrinhoItem){
    this.pedidoService.removerItem(item)
  }

  checarPedido(pedido : Pedido){
    pedido.itemPedido = this.carrinhoItem().
    map((item: CarrinhoItem) => new ItemPedido(item.quantidade, item.menuItem.id))
    this.pedidoService.checarPedido(pedido).subscribe( (pedidoId: string) => {
      console.log(`Compra concluída: ${pedidoId}`)
      this.pedidoService.clear()
    })
    console.log(pedido)
  }

}
