import { BaseFindAllPasswordsPaginatedUseCase } from '@application/password/useCases/find-all-passwords-paginated/base-find-all-passwords-paginated-use-case';
import { JwtAuthGuard } from '@infra/modules/auth/guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Inject,
  Injectable,
  Query,
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
export class FindAllPasswordsPaginatedController {
  constructor(
    @Inject(PasswordConstants.FindAllPasswordsPaginatedUseCase)
    private readonly findAllPasswordsPaginatedUseCase: BaseFindAllPasswordsPaginatedUseCase,
  ) {}

  @Get('passwords')
  async execute(
    @Req() request: Request,
    @Query('page') page?: number,
    @Query('size') size?: number,
  ) {
    const userId = request.user.id;

    return this.findAllPasswordsPaginatedUseCase.execute({
      userId,
      page,
      size,
    });
  }
}
