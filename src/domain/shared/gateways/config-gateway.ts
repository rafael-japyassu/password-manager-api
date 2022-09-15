export interface IConfigGateway {
  getEnvironment(key: string): string | undefined;
}
