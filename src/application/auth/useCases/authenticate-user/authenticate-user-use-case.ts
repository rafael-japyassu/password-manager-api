import { AuthenticateUserDto } from '@application/auth/useCases/authenticate-user/authenticate-user-dto';
import { InvalidAuthUserCredentialsException } from '@application/auth/exceptions/invalid-auth-user-credentials-exception';
import { IAuthenticateGateway } from '@domain/auth/gateways/authenticate-gateway';
import { AuthenticateUserResponseMapper } from '@domain/auth/mappers/authenticate-user-response-mapper';
import { AuthenticateUserResponse } from '@domain/auth/types/authenticate-user-response';
import { IConfigGateway } from '@domain/shared/gateways/config-gateway';
import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { BaseAuthenticateUserUseCase } from './base-authenticate-user-use-case';

export class AuthenticateUserUseCase extends BaseAuthenticateUserUseCase {
  private mapper: AuthenticateUserResponseMapper;

  constructor(
    private readonly userGateway: IUserGateway,
    private readonly hashGateway: IHashGateway,
    private readonly configGateway: IConfigGateway,
    private readonly authenticateGateway: IAuthenticateGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new AuthenticateUserResponseMapper();
  }

  async execute({
    email,
    password,
  }: AuthenticateUserDto): Promise<AuthenticateUserResponse> {
    const user = await this.userGateway.findOne({ where: { email } });

    if (!user) {
      throw new InvalidAuthUserCredentialsException(this.httpExceptionGateway);
    }

    const passwordMatch = await this.hashGateway.compare(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new InvalidAuthUserCredentialsException(this.httpExceptionGateway);
    }

    const secret = this.configGateway.getEnvironment('JWT_SECRET');

    const token = await this.authenticateGateway.generateToken({
      payload: { id: user.id },
      options: {
        secret,
        expiresIn: '1d',
      },
    });

    return this.mapper.mapFrom({ token, ...user });
  }
}
