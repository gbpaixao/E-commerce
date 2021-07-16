import database from '../database'

class DeleteCamisaService {
  async execute(id: number) {
    await database.clone().delete().from('Camisa').where('idCamisa', id)

    return true
  }
}

export { DeleteCamisaService }
