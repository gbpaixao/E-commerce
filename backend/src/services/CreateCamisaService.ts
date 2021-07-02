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
      tipo: camisa.tipo,
      administrador_idAdministrador: 1,
    }

    const camisaDB = await database
      .clone()
      .insert(camisaInsert, [
        'idCamisa',
        'nome as nomeCamisa',
        'descricao',
        'tipo',
        'valor',
        'estoque',
        'tamanho',
      ])
      .into('Camisa')

    // /* Fotos */
    // const { pictures, mainPicture } = camisa
    // pictures.push({
    //   titulo: mainPicture.titulo,
    //   url: mainPicture.url,
    // })
    // pictures.map(async (picture) => {
    //   await database
    //     .insert(
    //       { ...picture, Camisa_idCamisa: camisaResponse.idCamisa },
    //       'idFoto'
    //     )
    //     .into('Foto')
    // })

    return camisaDB
  }
}

export { CreateCamisaService }
