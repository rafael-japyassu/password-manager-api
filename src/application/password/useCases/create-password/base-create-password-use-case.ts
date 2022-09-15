import { UseCase } from '@application/use-case';
import { CreatePasswordResponse } from '@domain/password/types/create-password-response';
import { CreatePasswordDto } from './create-password-dto';

export abstract class BaseCreatePasswordUseCase extends UseCase<
  CreatePasswordDto,
  CreatePasswordResponse
> {}
