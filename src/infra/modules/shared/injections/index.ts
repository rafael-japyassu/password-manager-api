import { Provider } from '@nestjs/common';
import { SharedConstants } from '../constants';
import { BcryptGateway } from '../gateways/bcrypt.gateway';
import { ConfigServiceGateway } from '../gateways/config-sevice.gateway';
import { CryptoGateway } from '../gateways/crypto.gateway';
import { HttpExceptionGateway } from '../gateways/http-exception.gateway';

export const sharedInjections: Provider[] = [
  {
    provide: SharedConstants.BcryptGateway,
    useClass: BcryptGateway,
  },
  {
    provide: SharedConstants.CryptoGateway,
    useClass: CryptoGateway,
  },
  {
    provide: SharedConstants.HttpExceptionGateway,
    useClass: HttpExceptionGateway,
  },
  {
    provide: SharedConstants.ConfigServiceGateway,
    useClass: ConfigServiceGateway,
  },
];
