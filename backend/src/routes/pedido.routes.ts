import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => { return res.send('Rota de pedido') })

routes.post('/teste', (req, res) => {return res.json({teste: req.body})})

export default routes;