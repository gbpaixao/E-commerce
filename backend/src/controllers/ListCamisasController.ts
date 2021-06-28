import { Request, Response } from 'express'
import { ListCamisasService } from '../services/ListCamisasService'

class ListCamisasController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const listCamisasService = new ListCamisasService()

    const camisas = await listCamisasService.execute(parseInt(id))

    return response.json(camisas)
  }
}

export { ListCamisasController }
