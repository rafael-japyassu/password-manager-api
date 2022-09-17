import { UserNotFoundException } from '@application/user/exceptions/user-not-found-exception';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { GetPasswordsCountResponseMapper } from '@domain/password/mappers/get-passwords-count-response-mapper';
import { GetPasswordsCountResponse } from '@domain/password/types/get-passwords-count-response';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { BaseGetPasswordsCountUseCase } from './base-get-passwords-count-use-case';

export class GetPasswordsCountUseCase extends BaseGetPasswordsCountUseCase {
  private mapper: GetPasswordsCountResponseMapper;
  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly userGateway: IUserGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new GetPasswordsCountResponseMapper();
  }

  async execute(userId: string): Promise<GetPasswordsCountResponse> {
    const user = await this.userGateway.findOne({ where: { id: userId } });

    if (!user) {
      throw new UserNotFoundException(this.httpExceptionGateway);
    }

    const count = await this.passwordGateway.findAllAndCount({
      where: { userId },
    });

    return this.mapper.mapFrom(count);
  }
}
