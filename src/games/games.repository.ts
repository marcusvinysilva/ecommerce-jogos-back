/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/createGame.dto';
import { FindGamesQueryDto } from './dtos/find-game-query.dto';

@EntityRepository(Game)
export class UserRepository extends Repository<Game> {
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