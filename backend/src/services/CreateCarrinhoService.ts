import database from "../database";

interface Carrinho {
  Pedido_idPedido: number;
}

export class CreateCarrinhoService {
  async execute(pedido: Carrinho) {
    const carrinhoId = await database
      .clone()
      .insert(pedido, "idCarrinho")
      .into('Carrinho')

    return carrinhoId[0];
  }
}
