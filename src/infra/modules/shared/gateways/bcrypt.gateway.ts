import { IHashGateway } from '@domain/shared/gateways/hash-gateway';
import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptGateway implements IHashGateway {
  async hash(payload: string): Promise<string> {
    return bcryptjs.hash(payload, 8);
  }

  async compare(content: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(content, hash);
  }
}
