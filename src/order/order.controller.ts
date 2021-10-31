/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service'
import { CreateOrderDto } from '../order/dto/create-order.dto'

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private service: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.service.postOrder(createOrderDto);
  }

  @Get()
  findAll() {
    return this.service.findMany();
  }
}
