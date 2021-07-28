import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('PRODUCT_SERVICE') private clientProduct: ClientProxy,
    @Inject('ORDERS_SERVICE') private clientOrders: ClientProxy,
  ) {}

  async getCustomers() {
    const orders = this.clientOrders.emit('getOrder', '');
    const product = this.clientProduct.send('getProduct', '');

    console.log(orders);
    return orders;
  }
}
