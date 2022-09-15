import { PasswordCategoryEnum } from '@domain/password/enums/password-category';
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreatePasswordDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(PasswordCategoryEnum)
  category: PasswordCategoryEnum;

  @IsBoolean()
  @IsNotEmpty()
  favorite: boolean;

  @IsNotEmpty()
  @IsString()
  userPassword: string;
}
