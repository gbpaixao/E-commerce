import { Router } from "express";

import loginRouter from "./login.routes";
import camisaRouter from "./camisa.routes";
import pedidoRouter from "./pedido.routes";

const routes = Router()

routes.use('/login', loginRouter)
routes.use('/camisa', camisaRouter)
routes.use('/pedido', pedidoRouter)

export default routes