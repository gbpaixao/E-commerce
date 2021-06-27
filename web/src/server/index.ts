// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/users', () => [
      { nome: 'joao' },
    ]);
  },
});
