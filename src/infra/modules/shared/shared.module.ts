import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configEnvironment } from './config/env';
import { sharedInjections } from './injections';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEnvironment],
    }),
  ],
  controllers: [],
  providers: sharedInjections,
  exports: sharedInjections,
})
export class SharedModule {}
