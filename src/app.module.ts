import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './configs/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
 
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GamesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}