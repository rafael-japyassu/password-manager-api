import { UseCase } from '@application/use-case';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { CreatePasswordResponseMapper } from '@domain/password/mappers/create-password-response-mapper';
import { CreatePasswordResponse } from '@domain/password/types/create-password-response';
import { IEncryptGateway } from '@domain/shared/gateways/encrypt-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { CreatePasswordDto } from '../dtos/create-password-dto';

export class CreatePasswordUseCase extends UseCase<
  CreatePasswordDto,
  CreatePasswordResponse
> {
  private mapper: CreatePasswordResponseMapper;
  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly userGateway: IUserGateway,
    private readonly hashGateway: IHashGateway,
    private readonly encryptGateway: IEncryptGateway,
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
      throw new Error('User not found!');
    }

    const matchPassword = await this.hashGateway.compare(
      userPassword,
      user.password,
    );

    if (!matchPassword) {
      throw new Error('User not found!');
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
