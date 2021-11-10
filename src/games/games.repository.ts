import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import Game from './game.entity';
import { CreateGameDto } from './dto/createGame.dto';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  async createGame(
    createGameDto: CreateGameDto,
    //role: UserRole,
  ): Promise<Game> {
    const { gameName, images, category, description, price } = createGameDto;
    const game = this.create();
    game.gameName = gameName;
    game.images = images;
    game.price = price;
    game.category.name = category;
    game.description = description;

    try {
      await game.save();
      return game;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('O Jogo já está cadastrado');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o jogo no banco de dados',
        );
      }
    }
  }
}
