import { BaseEntity } from '@domain/shared/base-entity';

export class User extends BaseEntity {
  name: string;
  email: string;
  password: string;
}
