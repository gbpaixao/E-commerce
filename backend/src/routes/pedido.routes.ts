import { Router } from 'express';
import { ListAllPedidosController } from '../controllers/ListAllPedidosController';
import { ListPedidoController } from '../controllers/ListPedidoController';

const routes = Router();

const listAllPedidosController = new ListAllPedidosController();
const listPedidoController = new ListPedidoController();

routes.get('/pedidos/:clienteId/', listAllPedidosController.handle);
routes.get('/pedidos/:clienteId/:pedidoId', listPedidoController.handle);

export default routes;
