import { BaseFindPasswordDetailUseCase } from '@application/password/useCases/find-password-detail/base-find-password-detail-use-case';
import { JwtAuthGuard } from '@infra/modules/auth/guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Inject,
  Injectable,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { PasswordConstants } from '../../constants';

@Controller({
  version: '1',
})
@Injectable()
@UseGuards(JwtAuthGuard)
export class FindPasswordDetailController {
  constructor(
    @Inject(PasswordConstants.FindPasswordDetailUseCase)
    private readonly findPasswordDetailUseCase: BaseFindPasswordDetailUseCase,
  ) {}

  @Get('passwords/:id')
  async execute(@Param('id', ParseUUIDPipe) id: string) {
    return this.findPasswordDetailUseCase.execute(id);
  }
}
