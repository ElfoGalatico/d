export {Pedido, ItemPedido}

class Pedido{
  constructor(public Endereço: string, public Número: number, public Complemento: string,
    public formaPagamento: string, public itemPedido: ItemPedido[] = []) {}
}

class ItemPedido{
  constructor(public quantidade: number, public menuId: string) {}
}

