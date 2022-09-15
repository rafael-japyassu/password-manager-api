import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class PasswordNotFoundException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'PASSWORD_NOT_FOUND',
      message: 'Password not found!',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });
  }
}
