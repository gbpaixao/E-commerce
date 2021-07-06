import { Camisa } from '../@types/Camisa'
import database from '../database'

class UpdateCamisaService {
  async execute(id: number, camisa: Camisa) {
    // const { pictures, mainPicture } = camisa

    delete camisa.pictures
    delete camisa.mainPicture

    const camisaAtualizada: Camisa[] = await database
      .clone()
      .update(camisa, '*')
      .from('Camisa')
      .where('idCamisa', id)

    if (camisaAtualizada.length === 0)
      throw new Error("Esta camisa não existe")

    /* Atualizar imagem */
    
    delete camisaAtualizada[0].administrador_idAdministrador

    return camisaAtualizada
  }
}

export { UpdateCamisaService }
