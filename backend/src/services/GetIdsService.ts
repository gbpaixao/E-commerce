import database from "../database";

export class GetIdsService {
  async execute(idPagamento: string) {
    const ids = await database
      .clone()
      .join('Carrinho', 'Pedido.idPedido', 'Carrinho.Pedido_idPedido')
      .join(
        'itemPedido',
        'Carrinho.idCarrinho',
        'itemPedido.Carrinho_idCarrinho'
      )
      .join('Pagamento', 'Pedido.Pagamento_idPagamento', 'Pagamento.idPagamento')
      .select(
        'idPedido',
        'Camisa_idCamisa',
        'quantidade'
      )
      .from('Pedido')
      .where({ idPagamento })

    return ids;
  }
}