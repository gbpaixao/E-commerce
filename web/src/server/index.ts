// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/camisa/1', () => {
      const arrayTamanhos = ['P', 'M', 'G'];

      return [
        {
          nomeCamisa: 'Camisa Básica',
          descricao:
        `Camisa Flamengo I 21/22 s/n° Torcedor Adidas Masculina - Vermelho+Preto.
        Alô, Nação Rubro-Negra! Chegou o novo manto do Mengão para a temporada 21/22.
        Inspirado no modelo que os craques do Flamengo usaram no “ano de ouro”,
        a Camisa Flamengo Adidas ...`,
          valor: 150,
          tamanho: Array.from<boolean>({ length: arrayTamanhos.length }).fill(false),
          estoque: 23,
          quantidade: 1,
          numeroJogador: '',
          nomeJogador: '',
        },
      ];
    });
  },
});
