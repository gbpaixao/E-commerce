import { Request, Response } from 'express'
import { CreateClienteService } from '../services/CreateClienteService'
import { CreateEnderecoService } from '../services/CreateEnderecoService'
import { CreateUsuarioService } from '../services/CreateUsuarioService'

class CreateUsuarioController {
  async handle(request: Request, response: Response) {
    const { usuario } = request.body
    const { endereco } = request.body

    const createUsuarioService = new CreateUsuarioService()
    const createEnderecoService = new CreateEnderecoService()
    const createClienteService = new CreateClienteService()

    const user = await createUsuarioService.execute(usuario)
    const address = await createEnderecoService.execute(endereco)
    const {idUsuario,cpf}=user[0]
    const clienteId = await createClienteService.execute(address[0].idEndereco, idUsuario,cpf)

    return response.json({ usuario: user, endereco: address, cliente: clienteId })
  }
}

export { CreateUsuarioController }