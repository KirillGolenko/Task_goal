import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('PRODUCT_SERVICE') private clientProduct: ClientProxy,
    @Inject('ORDERS_SERVICE') private clientOrders: ClientProxy,
    @Inject('USER_SERVICE') private clientUsers: ClientProxy,
  ) {}

  async getCustomers() {
    const order = await this.clientOrders.send('getOrder', '').toPromise();
    const product = await this.clientProduct.send('getProduct', '').toPromise();
    const user = await this.clientUsers.send('getUser', '').toPromise();

    const customers = {
      customerName: user.name,
      orders: [
        {
          id: order.id,
          productId: order.productId,
          productTitle: product.title,
        },
      ],
    };
    console.log(product, order, user);
    return customers;
  }
}
