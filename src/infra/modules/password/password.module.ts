import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Password } from './gateway/typeorm/entities/password';
import { passwordInjections } from './injections';
import { FindAllPasswordsPaginatedController } from './controllers/find-all-passwords-paginated/find-all-passwords-paginated.controller';
import { CreatePasswordController } from './controllers/create-password/password.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Password]), UserModule],
  controllers: [CreatePasswordController, FindAllPasswordsPaginatedController],
  providers: passwordInjections,
})
export class PasswordModule {}
