import crypto from 'crypto';
import { IEncryptGateway } from '@domain/shared/gateways/encrypt-gateway';
import { PayloadEncrypt } from '@domain/shared/types/payload-encrypt';
import { Injectable } from '@nestjs/common';

const ENCODING = 'utf-8';
const ALGORITHM = 'aes-256-cbc';

@Injectable()
export class CryptoGateway implements IEncryptGateway {
  async encrypt(payload: string, password: string): Promise<PayloadEncrypt> {
    const iv = Buffer.alloc(16, password, ENCODING);
    const key = Buffer.alloc(32, password, ENCODING);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(key), iv);

    const encrypted = Buffer.concat([cipher.update(payload), cipher.final()]);
    return {
      encrypt: encrypted.toString('hex'),
      key: iv.toString('hex'),
    };
  }

  async decrypt(payload: PayloadEncrypt, password: string): Promise<string> {
    const iv = Buffer.from(payload.key, 'hex');
    const key = Buffer.alloc(32, password, ENCODING);
    const encryptedText = Buffer.from(payload.encrypt, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(key), iv);

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }
}
