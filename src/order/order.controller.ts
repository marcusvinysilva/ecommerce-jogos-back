/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.postOrder(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.find();
  }
}
