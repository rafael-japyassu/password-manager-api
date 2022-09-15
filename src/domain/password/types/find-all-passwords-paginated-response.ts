import { PasswordCategoryEnum } from '../enums/password-category';

export type FindAllPasswordsPaginatedResponse = {
  id: string;
  name: string;
  category: PasswordCategoryEnum;
  favorite: boolean;
  createdAt: Date;
};
