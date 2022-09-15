import { BaseCreatePasswordUseCase } from '@application/password/useCases/create-password/base-create-password-use-case';
import { JwtAuthGuard } from '@infra/modules/auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Inject,
  Injectable,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { PasswordConstants } from '../../constants';
import { CreatePasswordDto } from './create-password.dto';

@Controller({
  version: '1',
})
@Injectable()
@UseGuards(JwtAuthGuard)
export class CreatePasswordController {
  constructor(
    @Inject(PasswordConstants.CreatePasswordUseCase)
    private readonly createPasswordUseCase: BaseCreatePasswordUseCase,
  ) {}

  @Post('passwords')
  async execute(@Req() request: Request, @Body() data: CreatePasswordDto) {
    const userId = request.user.id;

    return this.createPasswordUseCase.execute({ ...data, userId });
  }
}
