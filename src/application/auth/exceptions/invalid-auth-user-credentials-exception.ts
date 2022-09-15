import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class InvalidAuthUserCredentialsException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'INVALID_EMAIL_OR_PASSWORD',
      message: 'invalid email or password!',
      statusCode: HttpStatusCode.UNAUTHORIZED,
    });
  }
}
