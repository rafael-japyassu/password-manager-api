import { Mapper } from '@domain/shared/mapper';
import { SeePasswordResponse } from '../types/see-password-response';

export class SeePasswordResponseMapper extends Mapper<
  string,
  SeePasswordResponse
> {
  mapFrom(input: string): SeePasswordResponse {
    return {
      content: input,
    };
  }
}
