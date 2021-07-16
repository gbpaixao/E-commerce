import { Request, Response } from 'express';
import { ListAllPedidosService } from '../services/ListAllPedidosService';

class ListAllPedidosController {
  async handle(request: Request, response: Response) {
    const { clienteId } = request.params;

    const listAllPedidosService = new ListAllPedidosService();

    const pedidos = await listAllPedidosService.execute(clienteId);

    return response.json(pedidos)
  }
}

export { ListAllPedidosController };
