import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class UserNotFoundException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'EMAIL_NOT_FOUND',
      message: 'User not found!',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });
  }
}
