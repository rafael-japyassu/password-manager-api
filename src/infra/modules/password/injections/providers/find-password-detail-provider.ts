import { FindPasswordDetailUseCase } from '@application/password/useCases/find-password-detail/find-password-detail-use-case';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { SharedConstants } from '@infra/modules/shared/constants';
import { Provider } from '@nestjs/common';
import { PasswordConstants } from '../../constants';

const useFactory = (
  passwordGateway: IPasswordGateway,
  httpExceptionGateway: IHttpExceptionGateway,
) => new FindPasswordDetailUseCase(passwordGateway, httpExceptionGateway);

export const findPasswordDetailProvider: Provider = {
  provide: PasswordConstants.FindPasswordDetailUseCase,
  useFactory,
  inject: [
    PasswordConstants.TypeOrmPgPasswordRepository,
    SharedConstants.HttpExceptionGateway,
  ],
};
