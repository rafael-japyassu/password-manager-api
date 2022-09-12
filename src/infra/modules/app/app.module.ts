import { SharedModule } from './../shared/shared.module';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [SharedModule, UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
