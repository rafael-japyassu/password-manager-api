import { FindOne } from '@domain/shared/types/find-one';
import { Password } from '../entities/password';
import type { CreatePassword } from '../types/create-password';
import { FindAllPaginated } from '../types/find-all-paginated';

export interface IPasswordGateway {
  findAllPaginated(data: FindAllPaginated): Promise<[Password[], number]>;
  findOne(data: FindOne<Password>): Promise<Password | undefined>;
  create(data: CreatePassword): Promise<Password>;
  update(password: Password): Promise<Password>;
  delete(id: string): Promise<void>;
}
