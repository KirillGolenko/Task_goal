import { Get, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('getOrder')
  getOrders(id: string) {
    return this.ordersService.getOrders(id);
  }

  @Get()
  getAllOrders(@Query() query) {
    const { id } = query;
    return this.ordersService.getOrders(id);
  }
}
