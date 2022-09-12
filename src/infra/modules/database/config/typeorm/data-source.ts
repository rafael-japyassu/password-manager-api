import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const path = process.env.NODE_ENV === 'database' ? 'src' : 'dist';

export const typeOrmConfigConnection: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`./${path}/infra/modules/**/gateway/typeorm/entities/*.{ts,js}`],
  migrations: [
    `./${path}/infra/modules/database/config/typeorm/migrations/*.{ts,js}`,
  ],
};

export const dataSource = new DataSource(typeOrmConfigConnection);
