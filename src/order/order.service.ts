/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
  ) {}

  async find(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  // async postOrder(createOrderDto: CreateOrderDto) {
  //   const order = this.orderRepository.create(createOrderDto);
  //   return await this.orderRepository.save(order);
  // }

  async postOrder(createOrderDto: CreateOrderDto) {
    const newOrder = await this.orderRepository.create({
      ...createOrderDto
  })
    await this.orderRepository.save(newOrder);
    return newOrder;
  }

}
