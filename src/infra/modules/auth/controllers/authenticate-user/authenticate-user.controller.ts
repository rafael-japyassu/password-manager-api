import { BaseAuthenticateUserUseCase } from '@application/auth/useCases/authenticate-user/base-authenticate-user-use-case';
import { Body, Controller, Inject, Injectable, Post } from '@nestjs/common';
import { AuthConstants } from '../../constants';
import { AuthenticateUserDto } from './authenticate-user.dto';

@Controller({
  version: '1',
})
@Injectable()
export class AuthenticateUserController {
  constructor(
    @Inject(AuthConstants.AuthenticateUserUseCase)
    private readonly authenticateUserUseCase: BaseAuthenticateUserUseCase,
  ) {}

  @Post('auth')
  async execute(@Body() data: AuthenticateUserDto) {
    return this.authenticateUserUseCase.execute(data);
  }
}
