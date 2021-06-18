import { Router } from 'express';

const pedidoRouter = Router();

pedidoRouter.get('/', (req, res) => {return res.send('Rota de pedido')})

export default pedidoRouter;