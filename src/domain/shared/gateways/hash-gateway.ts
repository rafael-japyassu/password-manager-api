export interface IHashGateway {
  hash(payload: string): Promise<string>;
  compare(content: string, hash: string): Promise<boolean>;
}
