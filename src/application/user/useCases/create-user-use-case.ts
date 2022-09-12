import { UseCase } from '@application/use-case';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { UserEmailAlreadyUsedException } from '@domain/user/exceptions/user-email-already-used-expcetion';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { CreateUserResponseMapper } from '@domain/user/mappers/create-user-response-mapper';
import { CreateUserResponse } from '@domain/user/types/create-user-response';
import { CreateUserDto } from '../dtos/create-user-dto';

export class CreateUserUseCase extends UseCase<
  CreateUserDto,
  CreateUserResponse
> {
  private mapper: CreateUserResponseMapper;
  constructor(
    private readonly userGateway: IUserGateway,
    private readonly hashGateway: IHashGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new CreateUserResponseMapper();
  }

  async execute({
    email,
    name,
    password,
  }: CreateUserDto): Promise<CreateUserResponse> {
    const verifyUser = await this.userGateway.findOne({ where: { email } });

    if (verifyUser) {
      throw new UserEmailAlreadyUsedException(this.httpExceptionGateway);
    }

    const passwordHash = await this.hashGateway.hash(password);

    const user = await this.userGateway.create({
      name,
      email,
      password: passwordHash,
    });

    return this.mapper.mapFrom(user);
  }
}
