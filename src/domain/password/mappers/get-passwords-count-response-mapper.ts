import { Mapper } from '@domain/shared/mapper';
import { GetPasswordsCountResponse } from '../types/get-passwords-count-response';

export class GetPasswordsCountResponseMapper extends Mapper<
  number,
  GetPasswordsCountResponse
> {
  mapFrom(input: number): GetPasswordsCountResponse {
    return {
      count: input,
    };
  }
}
