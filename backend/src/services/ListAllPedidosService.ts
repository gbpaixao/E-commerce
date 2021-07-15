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
        'dataCompra',
        'Pedido.valorTotal as valor',
        // 'Pedido.status', // ativo, finalizado e o outro que eu esqueci
        'Camisa.nome as nomeCamisa',
        'previsaoEntrega',
        'Entrega.status', //loja, correios, entregue)
        'codigoRastreio'
      )
      .from('Pedido')
      .where({ Cliente_idCliente: clienteId });

    return pedidos;
  }
}

export { ListAllPedidosService };
