import { PasswordCategoryEnum } from '@domain/password/enums/password-category';
import { User } from '@infra/modules/user/gateway/typeorm/entities/user';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('passwords')
export class Password {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column({ name: 'crypto_key' })
  cryptoKey: string;

  @Column({ type: 'varchar', length: 20 })
  category: PasswordCategoryEnum;

  @Column()
  favorite: boolean;

  @Column({ name: 'user_id' })
  userId: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user?: User;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;
}
