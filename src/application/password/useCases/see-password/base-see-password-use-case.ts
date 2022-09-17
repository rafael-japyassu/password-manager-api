import { UseCase } from '@application/use-case';
import { SeePasswordResponse } from '@domain/password/types/see-password-response';
import { SeePasswordDto } from './see-password-dto';

export abstract class BaseSeePasswordUseCase extends UseCase<
  SeePasswordDto,
  SeePasswordResponse
> {}
