import { Mapper } from '@domain/shared/mapper';
import { User } from '../entities/user';
import type { CreateUserResponse } from '../types/create-user-response';

export class CreateUserResponseMapper extends Mapper<User, CreateUserResponse> {
  mapFrom({ id }: User): CreateUserResponse {
    return {
      id,
    };
  }
}
