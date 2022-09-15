import { Mapper } from '@domain/shared/mapper';
import { User } from '@domain/user/entities/user';
import { AuthenticateUserResponse } from '../types/authenticate-user-response';

type Input = User & { token: string };

export class AuthenticateUserResponseMapper extends Mapper<
  Input,
  AuthenticateUserResponse
> {
  mapFrom({ token, id, name, email }: Input): AuthenticateUserResponse {
    return {
      token,
      user: {
        id,
        name,
        email,
      },
    };
  }
}
