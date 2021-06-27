import { Router } from "express";

import loginRoutes from "./login.routes";
import camisaRoutes from "./camisa.routes";
import pedidoRoutes from "./pedido.routes";

const routes = Router()

routes.get('/', (req, res) => res.send("api rodando"))
routes.use(loginRoutes)
routes.use(camisaRoutes)
routes.use(pedidoRoutes)

export default routes