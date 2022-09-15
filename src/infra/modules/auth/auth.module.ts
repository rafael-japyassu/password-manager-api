import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigService } from './services/jwt-config.service';
import { authInjections, authInjectionsShared } from './injections';
import { UserModule } from '../user/user.module';
import { AuthenticateUserController } from './controllers/authenticate-user/authenticate-user.controller';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
      inject: [ConfigModule],
    }),
  ],
  controllers: [AuthenticateUserController],
  providers: authInjections,
  exports: authInjectionsShared,
})
export class AuthModule {}
