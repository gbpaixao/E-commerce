import database from "../database";

interface Pedido {
  dataCompra: Date;
  valorTotal: number;
  desconto: number;
  status: string;
  Pagamento_idPagamento?: number;
  Cliente_idCliente: number;
  Entrega_idEntrega?: number;
}

export class CreatePedidoService {
  async execute(pedido: Pedido) {
    const pedidoId = await database
      .clone()
      .insert(pedido, "idPedido")
      .into('Pedido')

    return pedidoId[0];
  }
}
