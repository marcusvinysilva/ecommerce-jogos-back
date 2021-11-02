import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Game from './game.entity';
import { CreateGameDto } from './dto/createGame.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  getAllGames() {
    return this.gamesRepository.find();
  }

  async createGame(game: CreateGameDto): Promise<Game> {
    return this.gamesRepository.createGame(CreateGameDto, UserRole.ADMIN);
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
    const { gameName, images, description, price, }
    }
  }


  
}
