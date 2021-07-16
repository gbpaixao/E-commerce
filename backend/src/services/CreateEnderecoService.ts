import { Endereco } from '../@types/Endereco';
import database from '../database';

class CreateEnderecoService {
  
  async execute(endereco: Endereco) {

    const enderecoInsert = {

      rua: endereco.rua,
      bairro: endereco.bairro,
      numero: endereco.numero,
      cep: endereco.cep,
      complemento: endereco.complemento,
      cidade: endereco.cidade,
      estado: endereco.estado,
      pais: endereco.pais, 

    }; 
    const enderecoDB = await database
      .clone()
      .insert(enderecoInsert, [
        'idEndereco',
        'rua',
        'bairro',
        'numero',
        'cep',
        'complemento',
        'cidade',
        'estado',
        'pais',
      ])
      .into('Endereco');

    return enderecoDB;
  }
}

export { CreateEnderecoService };
