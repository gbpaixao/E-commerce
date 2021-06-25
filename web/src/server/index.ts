// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';
import { getRandomTshirt } from './getRandomTshirt';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/camisas/1', () => [
      {
        nomeCamisa: 'Camisa Básica',
        descricao: `Camisa Flamengo I 21/22 s/n° Torcedor Adidas Masculina - Vermelho+Preto.
            Alô, Nação Rubro-Negra! Chegou o novo manto do Mengão para a temporada 21/22.
            Inspirado no modelo que os craques do Flamengo usaram no “ano de ouro”,
            a Camisa Flamengo Adidas ...`,
        valor: 150,
        tamanho: 'P',
        estoque: 23,
        quantidade: 1,
        numeroJogador: '',
        nomeJogador: '',
        pictures: [
          getRandomTshirt(),
          getRandomTshirt(),
          getRandomTshirt(),
          getRandomTshirt(),
        ],
        mainPicture: getRandomTshirt(),
      },
    ]);
  },
});
