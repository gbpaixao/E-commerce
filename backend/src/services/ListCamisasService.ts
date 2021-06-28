import database from '../database'

class ListCamisasService {
  async execute(id: number) {
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
      .where('idCamisa', id)

    console.log(`camisas`, camisas)

    return camisas
  }
}

export { ListCamisasService }
