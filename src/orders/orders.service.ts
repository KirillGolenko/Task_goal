import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getOrders() {
    const payload = {
      id: 1,
      productId: '4',
    };
    return payload;
  }
}
