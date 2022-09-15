import { AuthenticateParams } from '../types/authenticate-params';

export interface IAuthenticateGateway {
  generateToken(data: AuthenticateParams): Promise<string>;
}
