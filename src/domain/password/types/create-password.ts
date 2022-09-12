import { PasswordCategoryEnum } from '../enums/password-category';

export type CreatePassword = {
  name: string;
  password: string;
  cryptoKey: string;
  category: PasswordCategoryEnum;
  favorite: boolean;
  userId: string;
};
