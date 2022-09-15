import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { User } from './gateway/typeorm/entities/user';
import { userInjections, userInjectionsExport } from './injections';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController],
  providers: userInjections,
  exports: userInjectionsExport,
})
export class UserModule {}
