import { Request, Response } from 'express'
import { ListAllCamisasService } from '../services/ListAllCamisasService'

class ListAllCamisasController {
  async handle(request: Request, response: Response) {
    const listAllCamisasService = new ListAllCamisasService()

    const camisas = await listAllCamisasService.execute()

    return response.json(camisas)
  }
}

export { ListAllCamisasController }
