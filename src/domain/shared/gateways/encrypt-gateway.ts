import { PayloadEncrypt } from '../types/payload-encrypt';

export interface IEncryptGateway {
  encrypt(payload: string, password: string): Promise<PayloadEncrypt>;
  decrypt(payload: PayloadEncrypt, password: string): Promise<string>;
}
