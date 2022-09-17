import { IsNotEmpty, IsString } from 'class-validator';

export class SeePasswordDto {
  @IsNotEmpty()
  @IsString()
  userPassword: string;
}
