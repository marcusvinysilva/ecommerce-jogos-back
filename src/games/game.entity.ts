import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import Category from '../categories/category.entity';

@Entity()
class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  gameName: string;

  @Column({ nullable: false, type: 'varchar' })
  description: string;

  @Column({ nullable: false, type: 'varchar' })
  price: string;

  @Column({ nullable: false, type: 'varchar' })
  images: string;

  @ManyToOne(() => Category, (category: Category) => category.games)
  @JoinTable()
  category: Category;
}

export default Game;
