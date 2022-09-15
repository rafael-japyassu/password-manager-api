import { AuthenticateUserDto } from '@application/auth/useCases/authenticate-user/authenticate-user-dto';
import { UseCase } from '@application/use-case';
import { AuthenticateUserResponse } from '@domain/auth/types/authenticate-user-response';

export abstract class BaseAuthenticateUserUseCase extends UseCase<
  AuthenticateUserDto,
  AuthenticateUserResponse
> {}
