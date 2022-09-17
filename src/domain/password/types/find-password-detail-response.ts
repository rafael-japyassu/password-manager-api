import { PasswordCategoryEnum } from '../enums/password-category';

export type FindPasswordDetailResponse = {
  id: string;
  name: string;
  category: PasswordCategoryEnum;
  favorite: boolean;
  createdAt: Date;
  updatedAt: Date;
};
