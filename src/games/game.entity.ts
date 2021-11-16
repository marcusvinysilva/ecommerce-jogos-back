/* eslint-disable prettier/prettier */
import { Order } from 'src/order/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import Category from '../categories/category.entity';

@Entity()
export class Game extends BaseEntity {
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

  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  @ManyToOne(() => Category, (category) => category.games)
  category: Category;

  @RelationId((game: Game) => game.category)
  categoryId: string;
}
