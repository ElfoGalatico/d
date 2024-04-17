import { MenuItem } from "../item-menu/item-menu";

export class CarrinhoItem{
  constructor(public menuItem: MenuItem, public quantidade: number = 1){
  }

  value(): number{
    return this.menuItem.price * this.quantidade
  }
}
