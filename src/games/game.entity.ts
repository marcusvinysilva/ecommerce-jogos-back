import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Category from '../categories/category.entity';

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

  @ManyToOne(() => Category, (category: Category) => category.games)
  public category: Category;
}

export default Game;
