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
      .clone()
      .insert(camisaInsert, [
        'idCamisa',
        'nome',
        'descricao',
        // 'fornecedor',
        'valor',
        'estoque',
        'tamanho',
      ])
      .into('Camisa')

    const camisaResponse = {
      idCamisa: camisaDB[0].idCamisa,
      nomeCamisa: camisaDB[0].nome,
      descricao: camisaDB[0].descricao,
      fornecedor: '',
      valor: camisaDB[0].valor,
      estoque: camisaDB[0].estoque,
      tamanho: camisaDB[0].tamanho,
    }

    /* Fotos */
    const { pictures, mainPicture } = camisa
    pictures.push({
      titulo: mainPicture.titulo,
      url: mainPicture.url,
    })
    pictures.map(async (picture) => {
      await database
        .insert(
          { ...picture, Camisa_idCamisa: camisaResponse.idCamisa },
          'idFoto'
        )
        .into('Foto')
    })

    return camisaResponse
  }
}

export { CreateCamisaService }
