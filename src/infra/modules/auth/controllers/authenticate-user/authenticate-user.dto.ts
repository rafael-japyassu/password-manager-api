import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthenticateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
