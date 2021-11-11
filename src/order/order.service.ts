/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
