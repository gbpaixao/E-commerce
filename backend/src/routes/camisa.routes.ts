import { Router } from 'express'
import { CreateCamisaController } from '../controllers/CreateCamisaController'
import { DeleteCamisaController } from '../controllers/DeleteCamisaController'
import { ListAllCamisasController } from '../controllers/ListAllCamisasController'
import { ListCamisasController } from '../controllers/ListCamisasController'
import { UpdateCamisaController } from '../controllers/UpdateCamisaController'

const routes = Router()

const createCamisaController = new CreateCamisaController()
const listCamisasController = new ListCamisasController()
const listAllCamisasController = new ListAllCamisasController()
const updateCamisaController = new UpdateCamisaController()
const deleteCamisaController = new DeleteCamisaController()

routes.get('/camisas/', listAllCamisasController.handle)
routes.get('/camisas/:id', listCamisasController.handle)

routes.post('/camisas', createCamisaController.handle)

routes.put('/camisas/:id', updateCamisaController.handle)

routes.delete('/camisas/:id', deleteCamisaController.handle)

export default routes
