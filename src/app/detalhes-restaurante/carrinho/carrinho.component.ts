import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{

  constructor(private carrinhoService: CarrinhoService){
  }

  ngOnInit(): void {
  }

  items(): any[]{
    return this.carrinhoService.items
  }

  total(): number {
    return this.carrinhoService.total()
  }

  clear(){
    this.carrinhoService.clear()
  }

  removerItem(item:any){
    this.carrinhoService.removerItem(item)
  }

  addItem(item:any){
    this.carrinhoService.addItem(item)
  }

}
