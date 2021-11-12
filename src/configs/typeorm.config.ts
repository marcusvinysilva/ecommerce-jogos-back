import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-35-169-204-98.compute-1.amazonaws.com',
  port: 5432,
  username: 'hrlopqpjztndbb',
  password: '5bb9466bbf72e592500cd4f3941894a60f1fc625dcf994484ea4f28bc474454c',
  database: 'd33gqbdv0jrj79',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
