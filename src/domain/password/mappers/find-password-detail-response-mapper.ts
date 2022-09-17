import { Mapper } from '@domain/shared/mapper';
import { Password } from '../entities/password';
import { FindPasswordDetailResponse } from '../types/find-password-detail-response';

export class FindPasswordDetailResponseMapper extends Mapper<
  Password,
  FindPasswordDetailResponse
> {
  mapFrom({
    id,
    name,
    category,
    favorite,
    createdAt,
    updatedAt,
  }: Password): FindPasswordDetailResponse {
    return {
      id,
      name,
      category,
      favorite,
      createdAt,
      updatedAt,
    };
  }
}
