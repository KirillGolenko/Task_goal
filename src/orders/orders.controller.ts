import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @EventPattern('getOrder')
  getOrders(): Record<string, unknown> {
    const orders = this.ordersService.getOrders();
    return orders;
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getOrders();
  }
}
