import { Router } from 'express'
import { CreateCamisaController } from '../controllers/CreateCamisaController'
import { ListAllCamisasController } from '../controllers/ListAllCamisasController'
import { ListCamisasController } from '../controllers/ListCamisasController'
import { UpdateCamisaController } from '../controllers/UpdateCamisaController'

const routes = Router()

const createCamisaController = new CreateCamisaController()
const listCamisasController = new ListCamisasController()
const listAllCamisasController = new ListAllCamisasController()
const updateCamisaController = new UpdateCamisaController()

routes.get('/camisas/', listAllCamisasController.handle)
routes.get('/camisas/:id', listCamisasController.handle)

routes.post('/camisas', createCamisaController.handle)

routes.put('/camisas/:id', updateCamisaController.handle)

export default routes
