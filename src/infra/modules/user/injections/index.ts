import { Provider } from '@nestjs/common';
import { UserConstants } from '../constants';
import { TypeOrmPgUserRepository } from '../gateway/typeorm/repositories/typeorm-pg-user.repository';
import { createUserProvider } from './providers/create-user-provider';

export const userInjections: Provider[] = [
  {
    provide: UserConstants.TypeOrmPgUserRepository,
    useClass: TypeOrmPgUserRepository,
  },
  createUserProvider,
];

export const userInjectionsExport: Provider[] = [
  {
    provide: UserConstants.TypeOrmPgUserRepository,
    useClass: TypeOrmPgUserRepository,
  },
];
