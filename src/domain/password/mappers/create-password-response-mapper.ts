import { Mapper } from '@domain/shared/mapper';
import { Password } from '../entities/password';
import { CreatePasswordResponse } from '../types/create-password-response';

export class CreatePasswordResponseMapper extends Mapper<
  Password,
  CreatePasswordResponse
> {
  mapFrom({ id }: Password): CreatePasswordResponse {
    return {
      id,
    };
  }
}
