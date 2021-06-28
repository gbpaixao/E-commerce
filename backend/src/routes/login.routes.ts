import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {return res.send('Rota de login')})

export default routes;