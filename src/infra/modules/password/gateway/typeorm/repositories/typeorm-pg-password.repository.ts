import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { CreatePassword } from '@domain/password/types/create-password';
import { FindAllPaginated } from '@domain/password/types/find-all-paginated';
import { FindOne } from '@domain/shared/types/find-one';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Password } from '../entities/password';

@Injectable()
export class TypeOrmPgPasswordRepository implements IPasswordGateway {
  constructor(
    @InjectRepository(Password)
    private readonly passwordRepository: Repository<Password>,
  ) {}

  async findAllPaginated({
    page,
    size,
    userId,
  }: FindAllPaginated): Promise<[Password[], number]> {
    return this.passwordRepository.findAndCount({
      where: { userId },
      take: size,
      skip: page * size,
    });
  }

  async findOne({ where }: FindOne<Password>): Promise<Password | undefined> {
    return this.passwordRepository.findOne({ where });
  }

  async create({
    category,
    cryptoKey,
    favorite,
    name,
    password,
    userId,
  }: CreatePassword): Promise<Password> {
    const newPassword = this.passwordRepository.create({
      category,
      cryptoKey,
      favorite,
      name,
      password,
      userId,
    });

    await this.passwordRepository.save(newPassword);

    return newPassword;
  }

  async update(password: Password): Promise<Password> {
    return this.passwordRepository.save(password);
  }

  async delete(id: string): Promise<void> {
    await this.passwordRepository.softDelete(id);
  }
}
