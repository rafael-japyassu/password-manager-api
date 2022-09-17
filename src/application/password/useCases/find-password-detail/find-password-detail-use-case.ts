import { PasswordNotFoundException } from '@application/password/exceptions/password-not-found-exception';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { FindPasswordDetailResponseMapper } from '@domain/password/mappers/find-password-detail-response-mapper';
import { FindPasswordDetailResponse } from '@domain/password/types/find-password-detail-response';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { BaseFindPasswordDetailUseCase } from './base-find-password-detail-use-case';

export class FindPasswordDetailUseCase extends BaseFindPasswordDetailUseCase {
  private mapper: FindPasswordDetailResponseMapper;
  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new FindPasswordDetailResponseMapper();
  }

  async execute(id: string): Promise<FindPasswordDetailResponse> {
    const password = await this.passwordGateway.findOne({ where: { id } });

    if (!password) {
      throw new PasswordNotFoundException(this.httpExceptionGateway);
    }

    return this.mapper.mapFrom(password);
  }
}
