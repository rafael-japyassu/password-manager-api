import { CreateUserUseCase } from '@application/user/useCases/create-user-use-case';
import { Body, Controller, Inject, Injectable, Post } from '@nestjs/common';
import { UserConstants } from './constants';

@Controller('users')
@Injectable()
export class UserController {
  constructor(
    @Inject(UserConstants.CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async create(@Body() data: any) {
    return this.createUserUseCase.execute(data);
  }
}
