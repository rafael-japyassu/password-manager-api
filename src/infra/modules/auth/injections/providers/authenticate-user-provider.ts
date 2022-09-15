import { AuthenticateUserUseCase } from '@application/auth/useCases/authenticate-user/authenticate-user-use-case';
import { IAuthenticateGateway } from '@domain/auth/gateways/authenticate-gateway';
import { IConfigGateway } from '@domain/shared/gateways/config-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { SharedConstants } from '@infra/modules/shared/constants';
import { UserConstants } from '@infra/modules/user/constants';
import { Provider } from '@nestjs/common';
import { AuthConstants } from '../../constants';

const useFactory = (
  userGateway: IUserGateway,
  hashGateway: IHashGateway,
  configGateway: IConfigGateway,
  authenticateGateway: IAuthenticateGateway,
  httpExceptionGateway: IHttpExceptionGateway,
) =>
  new AuthenticateUserUseCase(
    userGateway,
    hashGateway,
    configGateway,
    authenticateGateway,
    httpExceptionGateway,
  );

export const authenticateUserProvider: Provider = {
  provide: AuthConstants.AuthenticateUserUseCase,
  useFactory,
  inject: [
    UserConstants.TypeOrmPgUserRepository,
    SharedConstants.BcryptGateway,
    SharedConstants.ConfigServiceGateway,
    AuthConstants.JwtAuthenticateGateway,
    SharedConstants.HttpExceptionGateway,
  ],
};
