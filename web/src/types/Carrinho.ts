import { Camisa } from './Camisa';

export interface Item {
  camisa: Camisa
  quantidade: number
  numeroJogador: string
  nomeJogador: string
}

export interface Carrinho {
  items: Item[]
}
