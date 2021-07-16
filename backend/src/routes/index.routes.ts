import { Router } from 'express';

import loginRoutes from './login.routes';
import camisaRoutes from './camisa.routes';
import pedidoRoutes from './pedido.routes';
import { AuthenticateController } from '../controllers/AuthenticateController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const authenticateController = new AuthenticateController();

routes.get('/', (req, res) => res.send('api rodando'));
routes.post('/auth', authenticateController.handle);

routes.use(ensureAuthenticated);
// routes.use(loginRoutes)
routes.use(camisaRoutes);
routes.use(pedidoRoutes);

export default routes;
