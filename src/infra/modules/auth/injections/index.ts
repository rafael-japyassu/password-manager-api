import { Provider } from '@nestjs/common';
import { AuthConstants } from '../constants';
import { AuthenticateStrategyGateway } from '../gateways/authenticate-strategy.gateway';
import { JwtAuthenticateGateway } from '../gateways/jwt-authenticate.gateway';
import { authenticateUserProvider } from './providers/authenticate-user-provider';

export const authInjections: Provider[] = [
  {
    provide: AuthConstants.JwtAuthenticateGateway,
    useClass: JwtAuthenticateGateway,
  },
  {
    provide: AuthConstants.AuthenticateStrategyGateway,
    useClass: AuthenticateStrategyGateway,
  },
  authenticateUserProvider,
];

export const authInjectionsShared: Provider[] = [
  {
    provide: AuthConstants.JwtAuthenticateGateway,
    useClass: JwtAuthenticateGateway,
  },
];
