import { BaseEntity } from '@domain/shared/base-entity';
import { User } from '@domain/user/entities/user';
import { PasswordCategoryEnum } from '../enums/password-category';

export class Password extends BaseEntity {
  name: string;
  password: string;
  cryptoKey: string;
  category: PasswordCategoryEnum;
  favorite: boolean;
  userId: string;
  user?: User;
  deletedAt: Date;
}
