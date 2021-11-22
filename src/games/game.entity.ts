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
  JoinColumn,
  RelationId,
} from 'typeorm';
import Category from '../categories/category.entity';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'varchar' })
  gameName: string;

  @Column({ nullable: true, type: 'varchar' })
  description: string;

  @Column({ nullable: true, type: 'varchar' })
  price: string;

  @Column({ nullable: true, type: 'varchar' })
  images: string;

  @Column({ nullable: true, type: 'varchar' })
  screenshots: string;

  // @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  // @ManyToOne(() => Category, (category) => category.games)
  // category: Category;

  // @RelationId((game: Game) => game.category)
  // categoryId: string;
  @Column({ nullable: true, type: 'varchar' })
  categoryId: string;

  @ManyToOne(() => Category, (genre: Category) => genre.games)
  genre: Category;

  @ManyToOne(() => Order, (order) => order.games)
  order: Order;
}
