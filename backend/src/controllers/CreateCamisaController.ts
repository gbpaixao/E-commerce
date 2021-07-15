import { Request, Response } from 'express'
import { CreateCamisaService } from '../services/CreateCamisaService'

class CreateCamisaController {
  async handle(request: Request, response: Response) {
    const { camisa } = request.body

    const createCamisaService = new CreateCamisaService()

    const camisaId = await createCamisaService.execute(camisa)

    return response.json({ camisa: camisaId })
  }
}

export { CreateCamisaController }
