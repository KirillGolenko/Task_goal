import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('getOrder')
  getOrders(): Record<string, unknown> {
    return this.ordersService.getOrders();
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getOrders();
  }
}
