import { HttpStatusCode } from '@domain/shared/enums/http-status-code-enum';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';

export class InvalidPaginationParamsException {
  constructor(private readonly httpExceptionGateway: IHttpExceptionGateway) {
    this.httpExceptionGateway.handle({
      code: 'INVALID_PAGINATION_PARAMS',
      message: 'Invalid pagination params!',
      statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
    });
  }
}
