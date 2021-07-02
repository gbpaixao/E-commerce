import { Request, Response } from 'express'
import { Camisa } from '../@types/Camisa'
import { UpdateCamisaService } from '../services/UpdateCamisaService'

class UpdateCamisaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { camisa } = request.body

    const updateCamisaService = new UpdateCamisaService()

    /* Formatando requisição */
    const { nomeCamisa } = camisa
    delete camisa.id
    delete camisa.nomeCamisa
    const camisaRequest = { ...camisa, nome: nomeCamisa }

    const camisaAtualizada = await updateCamisaService.execute(
      parseInt(id),
      camisaRequest
    )

    return response.json(camisaAtualizada)
  }
}

export { UpdateCamisaController }
