import { IAuthenticateGateway } from '@domain/auth/gateways/authenticate-gateway';
import { AuthenticateParams } from '@domain/auth/types/authenticate-params';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthenticateGateway implements IAuthenticateGateway {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken({
    payload,
    options,
  }: AuthenticateParams): Promise<string> {
    return this.jwtService.sign(payload, options);
  }
}
