import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Game from './game.entity';
import { CreateGameDto } from './dto/createGame.dto';
import { UpdateGameDto } from './dtos/updateGame.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  getAllGames() {
    return this.gamesRepository.find();
  }

  async createGame(game: CreateGameDto) {
    const newGame = await this.gamesRepository.create(game);
    await this.gamesRepository.save(newGame);
    return newGame;
  }

  async findGameById(id: string): Promise<Game> {
    const game = await this.gamesRepository.findOne(id, {
      select: ['gameName', 'price', 'description', 'category', 'images', 'id'],
    });

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
