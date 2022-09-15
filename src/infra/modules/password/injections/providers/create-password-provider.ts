import { CreatePasswordUseCase } from '@application/password/useCases/create-password/create-password-use-case';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { IEncryptGateway } from '@domain/shared/gateways/encrypt-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { SharedConstants } from '@infra/modules/shared/constants';
import { UserConstants } from '@infra/modules/user/constants';
import { Provider } from '@nestjs/common';
import { PasswordConstants } from '../../constants';

const useFactory = (
  passwordGateway: IPasswordGateway,
  userGateway: IUserGateway,
  hashGateway: IHashGateway,
  encryptGateway: IEncryptGateway,
  httpExceptionGateway: IHttpExceptionGateway,
) =>
  new CreatePasswordUseCase(
    passwordGateway,
    userGateway,
    hashGateway,
    encryptGateway,
    httpExceptionGateway,
  );

export const createPasswordProvider: Provider = {
  provide: PasswordConstants.CreatePasswordUseCase,
  useFactory,
  inject: [
    PasswordConstants.TypeOrmPgPasswordRepository,
    UserConstants.TypeOrmPgUserRepository,
    SharedConstants.BcryptGateway,
    SharedConstants.CryptoGateway,
    SharedConstants.HttpExceptionGateway,
  ],
};
