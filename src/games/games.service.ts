import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Game from './game.entity';
import CreateGameDto from './dto/createGame.dto';


@Injectable()
export default class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>
  ) {}

  getAllGames() {
    return this.gamesRepository.find();
  }

  async createGame(game: CreateProductDto) {
    const newGame = await this.gamesRepository.create(game);
    await this.gamesRepository.save(newGame);
    return newGame;
  }
}
