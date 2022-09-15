import { AuthModule } from './../auth/auth.module';
import { PasswordModule } from './../password/password.module';
import { SharedModule } from './../shared/shared.module';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    AuthModule,
    PasswordModule,
    SharedModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
