import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import GameCategory from '../categories/category.entity';

@Entity()
class Game {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public gameName: string;

  @Column()
  public description: string;

  @Column()
  public price: string;

  @Column()
  public images: string;

  @ManyToOne(() => GameCategory, (category: GameCategory) => category.games)
  public category: GameCategory;

  @Column({
    type: 'jsonb'
  })
}

export default Game;