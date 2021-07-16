import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes/index.routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

server.listen(process.env.PORT || 3333, () => console.log('Api rodando.'));

export default server;
