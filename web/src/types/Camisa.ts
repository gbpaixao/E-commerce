export interface Camisa {
  id: string;
  nomeCamisa: string
  descricao: string
  valor: number
  tamanho: string
  estoque: number
  pictures: {
    titulo: string;
    url: string;
  }[];
  mainPicture: {
    titulo: string;
    url: string;
  };
  fornecedor: string
  tipo: string
}
