import { Endereco } from './Endereco';

export interface Usuario extends Endereco{
  idUsuario?: number;
  cpf: string;
  senha: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
}
