import { UseCase } from '@application/use-case';
import { CreateUserResponse } from '@domain/user/types/create-user-response';
import { CreateUserDto } from './create-user-dto';

export abstract class BaseCreateUserUseCase extends UseCase<
  CreateUserDto,
  CreateUserResponse
> {}
