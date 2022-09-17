import { UseCase } from '@application/use-case';
import { FindPasswordDetailResponse } from '@domain/password/types/find-password-detail-response';

export abstract class BaseFindPasswordDetailUseCase extends UseCase<
  string,
  FindPasswordDetailResponse
> {}
