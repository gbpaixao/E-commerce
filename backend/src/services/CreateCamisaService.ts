import { Camisa } from '../@types/Camisa'
import database from '../database'

class CreateCamisaService {
  async execute(camisa: Camisa) {
    /* Camisa */
    const camisaInsert = {
      nome: camisa.nomeCamisa,
      descricao: camisa.descricao,
      valor: camisa.valor,
      tamanho: camisa.tamanho,
      estoque: camisa.estoque,
      administrador_idAdministrador: 1,
    }

    const camisaDB = await database
      .insert(camisaInsert, 'idCamisa')
      .into('Camisa')

    const idCamisa = camisaDB[0]
    

    /* Fotos */
    const { pictures, mainPicture } = camisa
    pictures.push({
      titulo: mainPicture.titulo,
      url: mainPicture.url,
    })
    pictures.map(async (picture) => {
      await database
        .insert({ ...picture, Camisa_idCamisa: idCamisa }, 'idFoto')
        .into('Foto')
    })

    return idCamisa
  }
}

export { CreateCamisaService }
