import { Mapper } from '@domain/shared/mapper';
import { Password } from '../entities/password';
import { FindAllPasswordsPaginatedResponse } from '../types/find-all-passwords-paginated-response';

export class FindAllPasswordsPaginatedResponseMapper extends Mapper<
  Password,
  FindAllPasswordsPaginatedResponse
> {
  mapFrom({
    id,
    name,
    category,
    favorite,
    createdAt,
  }: Password): FindAllPasswordsPaginatedResponse {
    return {
      id,
      name,
      category,
      favorite,
      createdAt,
    };
  }
}
