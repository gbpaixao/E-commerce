import { Request, Response } from 'express'
import { DeleteCamisaService } from '../services/DeleteCamisaService'

class DeleteCamisaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteCamisaService = new DeleteCamisaService()

    await deleteCamisaService.execute(parseInt(id))

    return response.send(`Camisa ${id} deletada`)
  }
}

export { DeleteCamisaController }
