/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from ''
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { User } from ''

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(CreateOrderDto)
        private readonly orderRepository: Repository<OrderEntity>) {}

        async findMany() {
            return await this.orderRepository.find()
         
          }
}
