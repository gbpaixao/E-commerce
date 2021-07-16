import database from '../database'

class ListAllCamisasService {
  async execute() {
    const camisas = await database
      .clone()
      .select(
        'idCamisa as id',
        'nome as nomeCamisa',
        'descricao',
        'valor',
        'estoque',
        'tamanho',
        'tipo'
      )
      .from('Camisa')

    return camisas
  }
}

export { ListAllCamisasService }
