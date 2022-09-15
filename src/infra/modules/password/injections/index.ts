import { Provider } from '@nestjs/common';
import { PasswordConstants } from '../constants';
import { TypeOrmPgPasswordRepository } from '../gateway/typeorm/repositories/typeorm-pg-password.repository';
import { createPasswordProvider } from './providers/create-password-provider';
import { findAllPasswordsPaginatedProvider } from './providers/find-all-passwords-paginated-provider';

export const passwordInjections: Provider[] = [
  {
    provide: PasswordConstants.TypeOrmPgPasswordRepository,
    useClass: TypeOrmPgPasswordRepository,
  },
  createPasswordProvider,
  findAllPasswordsPaginatedProvider,
];
