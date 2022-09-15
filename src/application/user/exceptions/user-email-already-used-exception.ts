import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class UserEmailAlreadyUsedException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'EMAIL_ALREADY_USED',
      message: 'Email already used!',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });
  }
}
