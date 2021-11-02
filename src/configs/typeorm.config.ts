import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  Host: process.env.DB_HOST,
  Database: process.env.DB_DATABASE,
  User: process.env.DB_USERNAME,
  Port: 5432,
  Password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
