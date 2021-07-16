import { Request, Response } from 'express';
import { ListPedidoService } from '../services/ListPedidoService';

class ListPedidoController {
  async handle(request: Request, response: Response) {
    const { clienteId, pedidoId } = request.params;

    console.log(clienteId, pedidoId);

    const listPedidoService = new ListPedidoService();

    const pedido = await listPedidoService.execute(clienteId, pedidoId);

    return response.json(pedido);
  }
}

export { ListPedidoController };
