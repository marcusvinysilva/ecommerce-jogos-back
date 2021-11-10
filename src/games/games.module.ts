import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Game from './game.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GameRepository } from './games.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GameRepository])],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
