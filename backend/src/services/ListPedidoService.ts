import database from '../database';

class ListPedidoService {
  async execute(clienteId: string, pedidoId: string) {
    console.log(`clienteId, pedidoId`, clienteId, pedidoId);
    const pedido = await database
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
        'dataCompra',
        'Pedido.valorTotal as valor',
        // 'Pedido.status', // ativo, finalizado e cancelado
        'Camisa.nome as nomeCamisa',
        'previsaoEntrega',
        'Entrega.status', //loja, correios, entregue)
        'codigoRastreio'
      )
      .from('Pedido')
      .where({ Cliente_idCliente: clienteId, idPedido: pedidoId });

    return pedido[0];
  }
}

export { ListPedidoService };
