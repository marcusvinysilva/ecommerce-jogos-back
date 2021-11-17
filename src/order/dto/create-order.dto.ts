/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/user.entity';
import { Game } from 'src/games/game.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  games: Game;
}
