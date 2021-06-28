import { Router } from 'express'
import { CreateCamisaController } from '../controllers/CreateCamisaController'
import { ListAllCamisasController } from '../controllers/ListAllCamisasController'
import { ListCamisasController } from '../controllers/ListCamisasController'

const routes = Router()

const createCamisaController = new CreateCamisaController()
const listCamisasController = new ListCamisasController()
const listAllCamisasController = new ListAllCamisasController()

routes.get('/camisas/', listAllCamisasController.handle)
routes.get('/camisas/:id', listCamisasController.handle)

routes.post('/camisas', createCamisaController.handle)

export default routes
