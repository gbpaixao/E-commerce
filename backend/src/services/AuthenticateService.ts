import { Usuario } from '../@types/Usuario';
import database from '../database';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateService {
  async execute({ email, password }: IAuthenticateRequest) {
    const user: Usuario = (await database
      .clone()
      .select()
      .where({ email })
      .from('Usuario')
    )[0];

    if (!user) {
      throw new Error('Invalid email/password');
    }

    const passwordMatch = password === user.senha;

    if (!passwordMatch) {
      throw new Error('Invalid email/password');
    }

    const token = sign(
      {
        email: user.email,
      },
      '06de5b4fe24b14d67b1a53a7d5f4f7cb',
      { subject: String(user.idUsuario) , expiresIn: '1d' }
    );

    return token;
  }
}

export { AuthenticateService };
