/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // @Post('/create')
  // @UsePipes(ValidationPipe)
  // create(@Body() createOrderDto: CreateOrderDto): Promise<Order[]> {
  //   return this.service.postOrder(createOrderDto);
  // }

  @Get()
  findAll() {
    return this.orderService.find();
  }
}
