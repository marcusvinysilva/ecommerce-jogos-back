import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Game from '../games/game.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @OneToMany(() => Game, (game: Game) => game.category)
  @JoinTable()
  games: Game[];
}

export default Category;
