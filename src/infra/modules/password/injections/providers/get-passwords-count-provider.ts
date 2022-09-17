import { GetPasswordsCountUseCase } from '@application/password/useCases/get-passwords-count/get-passwords-count-use-case';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { SharedConstants } from '@infra/modules/shared/constants';
import { UserConstants } from '@infra/modules/user/constants';
import { Provider } from '@nestjs/common';
import { PasswordConstants } from '../../constants';

const useFactory = (
  passwordGateway: IPasswordGateway,
  userGateway: IUserGateway,
  httpExceptionGateway: IHttpExceptionGateway,
) =>
  new GetPasswordsCountUseCase(
    passwordGateway,
    userGateway,
    httpExceptionGateway,
  );

export const getPasswordsCountProvider: Provider = {
  provide: PasswordConstants.GetPasswordsCountUseCase,
  useFactory,
  inject: [
    PasswordConstants.TypeOrmPgPasswordRepository,
    UserConstants.TypeOrmPgUserRepository,
    SharedConstants.HttpExceptionGateway,
  ],
};
