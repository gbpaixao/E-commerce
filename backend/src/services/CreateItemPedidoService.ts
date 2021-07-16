import database from "../database";

interface ItemPedido {
  quantidade: number;
  valorTotal: number;
  Camisa_idCamisa: number;
  nomeJogador: string;
  numeroJogador: string;
  Carrinho_idCarrinho: number;
}

export class CreateItemPedidoService {
  async execute(item: ItemPedido) {
    const itemId = await database
      .clone()
      .insert(item, "idItemPedido")
      .into('itemPedido')

    return itemId[0];
  }
}
