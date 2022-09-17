import { PasswordNotFoundException } from '@application/password/exceptions/password-not-found-exception';
import { UserNotFoundException } from '@application/user/exceptions/user-not-found-exception';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { SeePasswordResponseMapper } from '@domain/password/mappers/see-password-response-mapper';
import { SeePasswordResponse } from '@domain/password/types/see-password-response';
import { IEncryptGateway } from '@domain/shared/gateways/encrypt-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { BaseSeePasswordUseCase } from './base-see-password-use-case';
import { SeePasswordDto } from './see-password-dto';

export class SeePasswordUseCase extends BaseSeePasswordUseCase {
  private mapper: SeePasswordResponseMapper;
  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly userGateway: IUserGateway,
    private readonly hashGateway: IHashGateway,
    private readonly encryptGateway: IEncryptGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new SeePasswordResponseMapper();
  }

  async execute({
    id,
    userPassword,
    userId,
  }: SeePasswordDto): Promise<SeePasswordResponse> {
    const user = await this.userGateway.findOne({ where: { id: userId } });

    if (!user) {
      throw new UserNotFoundException(this.httpExceptionGateway);
    }

    const passwordUserMatch = await this.hashGateway.compare(
      userPassword,
      user.password,
    );

    if (!passwordUserMatch) {
      throw new UserNotFoundException(this.httpExceptionGateway);
    }

    const password = await this.passwordGateway.findOne({ where: { id } });

    if (!password) {
      throw new PasswordNotFoundException(this.httpExceptionGateway);
    }

    const passwordDecrypted = await this.encryptGateway.decrypt(
      {
        key: password.cryptoKey,
        encrypt: password.password,
      },
      userPassword,
    );

    return this.mapper.mapFrom(passwordDecrypted);
  }
}
