import { Usuario } from '../@types/Usuario';
import database from '../database';

class CreateUsuarioService {
  async execute(usuario: Usuario) {
    /* Usuario */

    const usuarioInsert = {

      cpf: usuario.cpf,
      senha: usuario.senha,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      telefone: usuario.telefone,
      email: usuario.email,

    };

    const usuarioDB = await database
      .clone()
      .insert(usuarioInsert, [
        'idUsuario',
        'cpf',
        'senha',
        'nome',
        'sobrenome',
        'telefone',
        'email',
      ])
      .into('Usuario');

    return usuarioDB;
  }
}

export { CreateUsuarioService };
