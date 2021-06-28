import database from '../database'

class ListCamisasService {
  async execute(id: number) {
    const camisas = await database
      .clone()
      .select('idCamisa', 'nome', 'descricao', 'valor', 'estoque', 'tamanho')
      .from('Camisa')
      .where('idCamisa', id)

    return camisas
  }
}

export { ListCamisasService }
