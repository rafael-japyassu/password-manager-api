import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class PasswordNameAlreadyUsedException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'PASSWORD_NAME_ALREADY_USED',
      message: 'Password name already used!',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });
  }
}
