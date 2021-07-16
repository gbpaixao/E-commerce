import { Request, Response } from 'express';
import { AuthenticateService } from '../services/AuthenticateService';

class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateService = new AuthenticateService();

    const token = await authenticateService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateController };
