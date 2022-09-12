import { Global, Module } from '@nestjs/common';
import { sharedInjections } from './injections';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: sharedInjections,
  exports: sharedInjections,
})
export class SharedModule {}
