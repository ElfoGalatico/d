import { Injectable } from '@angular/core';
import { CarrinhoItem } from './carrinho';
import { MenuItem } from '../item-menu/item-menu';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items : CarrinhoItem[] = []

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantidade++
    }else{
      this.items.push(new CarrinhoItem(item))
    }
  }

  addQntd(item: CarrinhoItem){
    item.quantidade++
  }

  subtrairQntd(item: CarrinhoItem){
    item.quantidade--
    if (item.quantidade === 0){
      this.removerItem(item)
    }
  }

  removerItem(item:any){
    this.items.splice(this.items.indexOf(item),1)
  }
  total(): number{
    return this.items
    .map(item => item.value())
    .reduce((prev, value)=> prev+value, 0)
  }

  constructor() { }
}
