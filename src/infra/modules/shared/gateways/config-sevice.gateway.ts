import { IConfigGateway } from '@domain/shared/gateways/config-gateway';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigServiceGateway implements IConfigGateway {
  constructor(private readonly configService: ConfigService) {}

  getEnvironment(key: string): string {
    return this.configService.get(key);
  }
}
