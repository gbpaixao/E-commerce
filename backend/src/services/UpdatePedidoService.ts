import database from '../database'

interface Pedido {
  dataCompra?: Date;
  valorTotal?: number;
  desconto?: number;
  status?: string;
  Pagamento_idPagamento?: number;
  Cliente_idCliente?: number;
  Entrega_idEntrega?: number;
}

export class UpdatePedidoService {
  async execute(id: number, pedido: Pedido) {
    await database
      .clone()
      .update(pedido)
      .from('Pedido')
      .where('idPedido', id)
  }
}
