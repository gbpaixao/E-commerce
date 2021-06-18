import { Router } from 'express';

const loginRouter = Router();

loginRouter.get('/', (req, res) => {return res.send('Rota de login')})

export default loginRouter;