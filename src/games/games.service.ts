/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dtos/createGame.dto';
import { UpdateGameDto } from './dtos/updateGame.dto';
import { GameRepository } from './games.repository';
import { FindGamesQueryDto } from './dtos/find-game-query.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: GameRepository,
  ) {}

  getAllGames() {
    return this.gamesRepository.find();
  }

  async getGamesByCategory(
    queryDto: FindGamesQueryDto,
  ): Promise<{ games: Game[]; total: number }> {
    const games = await this.gamesRepository.findGames(queryDto);
    return games;
  }

  async createGame(createGameDto: CreateGameDto) {
    //return this.gamesRepository.createGame(createGameDto);
    const newGame = this.gamesRepository.create(createGameDto);
    await this.gamesRepository.save(newGame);
    return newGame;
  }

  async findGameById(id: string): Promise<Game> {
    const game = await this.gamesRepository.findOne(id);

    if (!game) throw new NotFoundException('Game not found');

    return game;
  }

  async updateGame(updateGameDto: UpdateGameDto, id: string): Promise<Game> {
    const game = await this.findGameById(id);
    const { gameName, images, description, price } = updateGameDto;
    game.gameName = gameName ? gameName : game.gameName;
    game.images = images ? images : game.images;
    game.description = description ? description : game.description;
    game.price = price ? price : game.price;

    try {
      await this.gamesRepository.save(game);
      return game;
    } catch (error) {
      throw new InternalServerErrorException(
        'There was an error while updating the game into the database',
      );
    }
  }
  async deleteGame(id: string) {
    const deleteResponse = await this.gamesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
