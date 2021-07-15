import { Request, Response } from 'express'
import { CreateUsuarioService } from '../services/CreateUsuarioService'

class CreateUsuarioController {
  async handle(request: Request, response: Response) {
    const { usuario } = request.body

    const createUsuarioService = new CreateUsuarioService()

    const usuarioId = await createUsuarioService.execute(usuario)

    return response.json({ usuario: usuarioId })
  }
}

export { CreateUsuarioController }