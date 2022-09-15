import { PasswordCategoryEnum } from '@domain/password/enums/password-category';

export class CreatePasswordDto {
  name: string;
  password: string;
  category: PasswordCategoryEnum;
  favorite: boolean;
  userId: string;
  userPassword: string;
}
