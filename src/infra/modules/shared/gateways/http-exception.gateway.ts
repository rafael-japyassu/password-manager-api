import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { HttpExceptionParams } from '@domain/shared/types/http-exception-params';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class HttpExceptionGateway implements IHttpExceptionGateway {
  handle(data: HttpExceptionParams): Promise<string> {
    throw new HttpException(data, data.statusCode);
  }
}
