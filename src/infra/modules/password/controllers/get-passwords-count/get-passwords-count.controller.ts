import { BaseGetPasswordsCountUseCase } from '@application/password/useCases/get-passwords-count/base-get-passwords-count-use-case';
import { JwtAuthGuard } from '@infra/modules/auth/guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Inject,
  Injectable,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { PasswordConstants } from '../../constants';

@Controller({
  version: '1',
})
@Injectable()
@UseGuards(JwtAuthGuard)
export class GetPasswordsCountController {
  constructor(
    @Inject(PasswordConstants.GetPasswordsCountUseCase)
    private readonly getPasswordsCountUseCase: BaseGetPasswordsCountUseCase,
  ) {}

  @Get('passwords/user/get-passwords-count')
  async execute(@Req() request: Request) {
    const userId = request.user.id;
    return this.getPasswordsCountUseCase.execute(userId);
  }
}
