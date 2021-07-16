import database from '../database';

class ListAllPedidosService {
  async execute(clienteId: string) {
    const pedidos = await database
      .clone()
      .join('Carrinho', 'Pedido.idPedido', 'Carrinho.Pedido_idPedido')
      .join('Entrega', 'Pedido.Entrega_idEntrega', 'Entrega.idEntrega')
      .join(
        'itemPedido',
        'Carrinho.idCarrinho',
        'itemPedido.Carrinho_idCarrinho'
      )
      .join('Camisa', 'itemPedido.Camisa_idCamisa', 'Camisa.idCamisa')
      .select(
        'idPedido',
        'dataCompra as previsaoEntrega',
        'Pedido.valorTotal as valor',
        'Entrega.status' //loja, correios, entregue)
      )
      .from('Pedido')
      .where({ Cliente_idCliente: clienteId })
      .andWhere('Pedido.status', '<>', 'cancelado');

    return pedidos;
  }
}

export { ListAllPedidosService };
