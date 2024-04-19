import { CarrinhoItem } from './../../detalhes-restaurante/carrinho/carrinho';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'mt-itens-pedido',
  templateUrl: './itens-pedido.component.html',
  styleUrl: './itens-pedido.component.css'
})
export class ItensPedidoComponent implements OnInit{


  @Input()  itens : CarrinhoItem[] = []

  @Output() addQntd = new EventEmitter<CarrinhoItem>()
  @Output() subtrairQntd = new EventEmitter<CarrinhoItem>()
  @Output() removerItem = new EventEmitter<CarrinhoItem>()




  constructor() {}



  ngOnInit(): void {

  }

  EmitAddQntd(item: CarrinhoItem) {
    this.addQntd.emit(item);
  }

  EmitSubtrairQntd(item: CarrinhoItem){
    this.subtrairQntd.emit(item)
  }

  EmitRemoverItem(item: CarrinhoItem){
    this.removerItem.emit(item)
  }





}
