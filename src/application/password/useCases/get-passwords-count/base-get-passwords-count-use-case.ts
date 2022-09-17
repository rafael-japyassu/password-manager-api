import { UseCase } from '@application/use-case';
import { GetPasswordsCountResponse } from '@domain/password/types/get-passwords-count-response';

export abstract class BaseGetPasswordsCountUseCase extends UseCase<
  string,
  GetPasswordsCountResponse
> {}
