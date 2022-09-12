import type { HttpExceptionParams } from '../types/http-exception-params';

export interface IHttpExceptionGateway {
  handle(data: HttpExceptionParams): Promise<string>;
}
