import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('PRODUCT_SERVICE') private clientProduct: ClientProxy,
    @Inject('ORDERS_SERVICE') private clientOrders: ClientProxy,
    @Inject('USER_SERVICE') private clientUsers: ClientProxy,
  ) {}

  async getCustomers(id) {
    const order = await this.clientOrders.send('getOrder', '').toPromise(id);
    const product = await this.clientProduct.send('getProduct', '').toPromise();
    const user = await this.clientUsers.send('getUser', '').toPromise();
    const orders = order.reduce((acc, item) => {
      acc.push({
        id: item.id,
        productId: item.productId,
        productTitle: product.title,
      });
    }, []);
    return {
      customerName: user.name,
      orders: orders,
    };
  }
}
