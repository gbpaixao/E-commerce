import { Router } from 'express';
import { CancelarPedidoController } from '../controllers/CancelarPedidoController';
import { ListAllPedidosController } from '../controllers/ListAllPedidosController';
import { ListPedidoController } from '../controllers/ListPedidoController';

const routes = Router();

const listAllPedidosController = new ListAllPedidosController();
const listPedidoController = new ListPedidoController();
const cancelarPedidoController = new CancelarPedidoController();

routes.get('/pedidos/:clienteId/', listAllPedidosController.handle);
routes.get('/pedidos/:clienteId/:pedidoId', listPedidoController.handle);

routes.delete('/pedidos/:clienteId/:pedidoId', cancelarPedidoController.handle);

export default routes;
