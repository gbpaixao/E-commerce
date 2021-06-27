import { Router } from 'express';
import { CreateCamisaController } from '../controllers/CreateCamisaController';

const routes = Router();

const createCamisaController = new CreateCamisaController()

routes.get('/camisas', (req, res) => res.send('camisa'))
routes.post('/camisas', createCamisaController.handle)

export default routes;