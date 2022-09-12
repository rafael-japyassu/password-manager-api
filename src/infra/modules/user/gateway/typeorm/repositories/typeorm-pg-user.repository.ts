import { FindOne } from '@domain/shared/types/find-one';
import { IUserGateway } from '@domain/user/gateways/user-gateway';
import { CreateUser } from '@domain/user/types/create-user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user';

@Injectable()
export class TypeOrmPgUserRepository implements IUserGateway {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne({ where }: FindOne<User>): Promise<User> {
    return this.userRepository.findOne({ where });
  }

  async create({ email, name, password }: CreateUser): Promise<User> {
    const user = this.userRepository.create({
      name,
      email,
      password,
    });

    await this.userRepository.save(user);
    return user;
  }
}
