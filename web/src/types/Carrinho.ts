import { Camisa } from './Camisa';

export interface Carrinho {
  items: {
    camisa: Camisa
    quantidade: number
    numeroJogador: string
    nomeJogador: string
  }[]
}
