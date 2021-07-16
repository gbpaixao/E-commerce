import { json, Request, Response } from 'express';
import { CancelarPedidoService } from '../services/CancelarPedidoService';

class CancelarPedidoController {
  async handle(request: Request, response: Response) {
    const { clienteId, pedidoId } = request.params;

    const cancelarPedidoService = new CancelarPedidoService();

    await cancelarPedidoService.execute(clienteId, pedidoId);

    return response.json({ message: `${pedidoId} cancelado.` });
  }
}

export { CancelarPedidoController };
