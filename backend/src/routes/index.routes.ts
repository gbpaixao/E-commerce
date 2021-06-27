import { Router } from "express";

import loginRoutes from "./login.routes";
import camisaRoutes from "./camisa.routes";
import pedidoRoutes from "./pedido.routes";

const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/camisa', camisaRoutes)
routes.use('/pedido', pedidoRoutes)

export default routes