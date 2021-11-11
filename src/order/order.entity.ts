/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Game } from 'src/games/game.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @ManyToOne(() => Game, (game) => game.order)
  games: Game;
}
