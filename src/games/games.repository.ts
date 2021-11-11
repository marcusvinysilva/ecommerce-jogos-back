/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Game } from './game.entity';
import { FindGamesQueryDto } from './dtos/find-game-query.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateGameDto } from './dtos/createGame.dto';

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

  async findGames(
    queryDto: FindGamesQueryDto,
  ): Promise<{ games: Game[]; total: number }> {
    queryDto.page = queryDto.page < 1 ? 1 : queryDto.page;
    queryDto.limit = queryDto.limit > 100 ? 100 : queryDto.limit;

    const { gameName, description, price } = queryDto;
    const query = this.createQueryBuilder('game');

    if (gameName) {
      query.andWhere('game.gameName ILIKE :gameName', {
        gameName: `%${gameName}%`,
      });
    }

    if (description) {
      query.andWhere('game.description ILIKE :description', {
        description: `%${description}%`,
      });
    }

    if (price) {
      query.andWhere('game.price ILIKE :price', { price: `%${price}%` });
    }

    query.skip((queryDto.page - 1) * queryDto.limit);
    query.take(queryDto.limit);
    query.orderBy(queryDto.sort ? JSON.parse(queryDto.sort) : undefined);
    query.select(['game.gameName', 'game.description', 'game.price']);

    const [games, total] = await query.getManyAndCount();

    return { games, total };
  }
}
