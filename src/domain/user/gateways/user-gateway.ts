import type { FindOne } from '@domain/shared/types/find-one';
import type { CreateUser } from '../types/create-user';
import { User } from '../entities/user';

export interface IUserGateway {
  findOne(data: FindOne<User>): Promise<User | undefined>;
  create(data: CreateUser): Promise<User>;
}
