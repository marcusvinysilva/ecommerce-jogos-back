import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Game from '../games/game.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(() => Game, (game: Game) => game.category)
  public games: Game[];
}

export default Category;
