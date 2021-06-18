import { Router } from 'express';

const camisaRouter = Router();

camisaRouter.get('/', (req, res) => {return res.send('Rota de camisa')})

export default camisaRouter;