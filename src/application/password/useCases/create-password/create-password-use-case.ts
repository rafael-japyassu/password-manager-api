import { PasswordNameAlreadyUsedException } from '@application/password/exceptions/password-name-already-used-exception';
import { UserNotFoundException } from '@application/user/exceptions/user-not-found-exception';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { CreatePasswordResponseMapper } from '@domain/password/mappers/create-password-response-mapper';
import { CreatePasswordResponse } from '@domain/password/types/create-password-response';
import { IEncryptGateway } from '@domain/shared/gateways/encrypt-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';

import { BaseCreatePasswordUseCase } from './base-create-password-use-case';
import { CreatePasswordDto } from './create-password-dto';

export class CreatePasswordUseCase extends BaseCreatePasswordUseCase {
  private mapper: CreatePasswordResponseMapper;

  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly userGateway: IUserGateway,
    private readonly hashGateway: IHashGateway,
    private readonly encryptGateway: IEncryptGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new CreatePasswordResponseMapper();
  }

  async execute({
    name,
    password,
    category,
    favorite,
    userId,
    userPassword,
  }: CreatePasswordDto): Promise<CreatePasswordResponse> {
    const user = await this.userGateway.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new UserNotFoundException(this.httpExceptionGateway);
    }

    const matchPassword = await this.hashGateway.compare(
      userPassword,
      user.password,
    );

    if (!matchPassword) {
      throw new UserNotFoundException(this.httpExceptionGateway);
    }

    const verifyPasswordName = await this.passwordGateway.findOne({
      where: {
        name,
        userId,
      },
    });

    if (verifyPasswordName) {
      throw new PasswordNameAlreadyUsedException(this.httpExceptionGateway);
    }

    const { encrypt, key } = await this.encryptGateway.encrypt(
      password,
      userPassword,
    );

    const newPassword = await this.passwordGateway.create({
      name,
      password: encrypt,
      cryptoKey: key,
      category,
      favorite,
      userId,
    });

    return this.mapper.mapFrom(newPassword);
  }
}
