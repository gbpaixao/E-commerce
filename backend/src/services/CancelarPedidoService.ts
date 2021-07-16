import database from '../database';

class CancelarPedidoService {
  async execute(clienteId: string, pedidoId: string) {
    await database
      .update({ status: 'cancelado' })
      .from('Pedido')
      .where({ idPedido: pedidoId });

    return true;
  }
}

export { CancelarPedidoService };
