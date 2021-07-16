import database from '../database'

export class UpdateCamisaEstoqueService {
  async execute(id: number, quantidade: number) {
    await database
      .clone()
      .update('estoque', quantidade)
      .from('Camisa')
      .where('idCamisa', id)
  }
}
