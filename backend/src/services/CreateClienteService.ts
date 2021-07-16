import database from '../database';

class CreateClienteService {
  async execute(enderecoId: number, usuarioId: number, usuario_cpf: string) {
    const clienteInsert = {

    Endereco_idEndereco: enderecoId,
    Usuario_idUsuario: usuarioId,
    Usuario_cpf: usuario_cpf, 

    }; 
    const clienteDB = await database
      .clone()
      .insert(clienteInsert, [
        'idCliente',
        'Endereco_idEndereco',
        'Usuario_idUsuario',
        'Usuario_cpf',
        
      ])
      .into('Cliente');
      

    return clienteDB;
  }
}

export { CreateClienteService };
