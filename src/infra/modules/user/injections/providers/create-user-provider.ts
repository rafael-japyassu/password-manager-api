import { CreateUserUseCase } from '@application/user/useCases/create-user-use-case';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { SharedConstants } from '@infra/modules/shared/constants';
import { Provider } from '@nestjs/common';
import { UserConstants } from '../../constants';

const useFactory = (
  userGateway: IUserGateway,
  hashGateway: IHashGateway,
  httpExceptionGateway: IHttpExceptionGateway,
) => new CreateUserUseCase(userGateway, hashGateway, httpExceptionGateway);

export const createUserProvider: Provider = {
  provide: UserConstants.CreateUserUseCase,
  useFactory,
  inject: [
    UserConstants.TypeOrmPgUserRepository,
    SharedConstants.BcryptGateway,
    SharedConstants.HttpExceptionGateway,
  ],
};
