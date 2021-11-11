import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
  username: 'wpyqplkp',
  password: 'OqHgPvIDQKq43rVmQKA91jhu6qnLaCZN',
  database: 'wpyqplkp',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
