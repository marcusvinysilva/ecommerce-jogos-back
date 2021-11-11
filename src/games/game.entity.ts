/* eslint-disable prettier/prettier */
import { Order } from 'src/order/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Category from '../categories/category.entity';

@Entity()
export class Game {

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

  @OneToMany(() => Order, (order: Order) => order.games)
  order: Order;
}
