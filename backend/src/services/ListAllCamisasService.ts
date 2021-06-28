import database from '../database'

class ListAllCamisasService {
  async execute() {
    const camisas = await database
      .clone()
      .select(
        'idCamisa',
        'nome as nomeCamisa',
        'descricao',
        'valor',
        'estoque',
        'tamanho'
      )
      .from('Camisa')

    return camisas
  }
}

export { ListAllCamisasService }
