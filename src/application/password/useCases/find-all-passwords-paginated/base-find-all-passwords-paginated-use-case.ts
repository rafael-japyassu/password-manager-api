import { UseCase } from '@application/use-case';
import { FindAllPasswordsPaginatedResponse } from '@domain/password/types/find-all-passwords-paginated-response';
import { Pagination } from '@domain/shared/types/pagination';
import { FindAllPasswordsPaginatedDto } from './find-all-passwords-paginated-dto';

export abstract class BaseFindAllPasswordsPaginatedUseCase extends UseCase<
  FindAllPasswordsPaginatedDto,
  Pagination<FindAllPasswordsPaginatedResponse>
> {}
