import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Password } from './gateway/typeorm/entities/password';
import { passwordInjections } from './injections';
import { FindAllPasswordsPaginatedController } from './controllers/find-all-passwords-paginated/find-all-passwords-paginated.controller';
import { CreatePasswordController } from './controllers/create-password/password.controller';
import { FindPasswordDetailController } from './controllers/find-password-detail/find-password-detail.controller';
import { SeePasswordController } from './controllers/see-password/see-password.controller';
import { GetPasswordsCountController } from './controllers/get-passwords-count/get-passwords-count.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Password]), UserModule],
  controllers: [
    CreatePasswordController,
    FindAllPasswordsPaginatedController,
    FindPasswordDetailController,
    SeePasswordController,
    GetPasswordsCountController,
  ],
  providers: passwordInjections,
})
export class PasswordModule {}
