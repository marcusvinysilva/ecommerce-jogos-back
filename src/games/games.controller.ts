import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
//import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import { CreateGameDto } from './dto/createGame.dto';
import { UpdateGameDto } from './dtos/updateGame.dto';
import { GamesService } from './games.service';

@Controller('games')
//@UseGuards(AuthGuard(), RolesGuard)
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAllGames();
  }

  @Post()
  //@Role(UserRole.ADMIN)
  //@UseGuards(JwtAuthenticationGuard)
  async createGame(@Body() game: CreateGameDto) {
    const newGame = await this.gamesService.createGame(game);
    return {
      newGame,
      message: 'Game was successfully registered! ',
    };
  }

  @Patch(':id')
  async updateGame(
    @Body() updateGameDto: UpdateGameDto,
    @Param('id') id: string,
  ) {
    return this.gamesService.updateGame(updateGameDto, id);
    // ) {
    //   if (user.role != UserRole.ADMIN)
    //     throw new ForbiddenException('Authorization was denied. ');
    //   else {
    //     return this.gamesService.updateGame(updateGameDto, id);
    //   }
  }

  @Delete('/:id')
  //@Role(UserRole.ADMIN)
  async deleteGame(@Param('id') id: string) {
    await this.gamesService.deleteGame(id);
    return { message: 'The game was remove.' };
  }
}