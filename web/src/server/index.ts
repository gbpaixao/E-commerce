// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';
import { getRandomTshirt } from './getRandomTshirt';

createServer({
  models: {
    camisa: Model,
  },
  seeds(server) {
    server.db.loadData({
      camisas: [
        {
          id: 1,
          nomeCamisa: 'Camisa Básica',
          descricao: `Camisa Flamengo I 21/22 s/n° Torcedor Adidas Masculina - Vermelho+Preto.
              Alô, Nação Rubro-Negra! Chegou o novo manto do Mengão para a temporada 21/22.
              Inspirado no modelo que os craques do Flamengo usaram no “ano de ouro”,
              a Camisa Flamengo Adidas ...`,
          valor: 150,
          tamanho: 'P',
          estoque: 23,
          pictures: [
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
          ],
          mainPicture: {
            titulo: 'title.png',
            url: getRandomTshirt(),
          },
        },
        {
          id: 2,
          nomeCamisa: 'Camisa 2',
          descricao: 'Camisa 2',
          valor: 200,
          tamanho: 'M',
          estoque: 15,
          pictures: [
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
            {
              titulo: 'title.png',
              url: getRandomTshirt(),
            },
          ],
          mainPicture: {
            titulo: 'title.png',
            url: getRandomTshirt(),
          },
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/camisas', () => this.schema.all('camisa').models);

    this.get('/camisas/:id', (schema, request) => {
      const { id } = request.params;

      return schema.db.camisas.find(id);
    });

    this.post(
      '/camisas',
      (schema, request) => {
        const camisa = JSON.parse(request.requestBody);

        return camisa;
      },
      { timing: 3000 },
    );
  },
});
