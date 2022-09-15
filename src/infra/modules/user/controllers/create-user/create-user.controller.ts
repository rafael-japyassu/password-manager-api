import { BaseCreateUserUseCase } from '@application/user/useCases/create-user/base-create-user-use-case';
import { Body, Controller, Inject, Injectable, Post } from '@nestjs/common';
import { UserConstants } from '../../constants';
import { CreateUserDto } from './create-user.dto';

@Controller({
  version: '1',
})
@Injectable()
export class CreateUserController {
  constructor(
    @Inject(UserConstants.CreateUserUseCase)
    private readonly createUserUseCase: BaseCreateUserUseCase,
  ) {}

  @Post('users')
  async execute(@Body() data: CreateUserDto) {
    return this.createUserUseCase.execute(data);
  }
}
