import database from '../database';

class CancelarPedidoService {
  async execute(clienteId: string, pedidoId: string) {
    await database
      .update({ status: 'cancelado' })
      .from('Pedido')
      .where({ idPedido: pedidoId, Cliente_idCliente: clienteId });

    return true;
  }
}

export { CancelarPedidoService };
