import { BaseSeePasswordUseCase } from '@application/password/useCases/see-password/base-see-password-use-case';
import { JwtAuthGuard } from '@infra/modules/auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Inject,
  Injectable,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { PasswordConstants } from '../../constants';
import { SeePasswordDto } from './see-password.dto';

@Controller({
  version: '1',
})
@Injectable()
@UseGuards(JwtAuthGuard)
export class SeePasswordController {
  constructor(
    @Inject(PasswordConstants.SeePasswordUseCase)
    private readonly seePasswordUseCase: BaseSeePasswordUseCase,
  ) {}

  @Post('passwords/:id/see')
  async execute(
    @Req() request: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() { userPassword }: SeePasswordDto,
  ) {
    const userId = request.user.id;
    return this.seePasswordUseCase.execute({ id, userId, userPassword });
  }
}
