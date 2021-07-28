import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    const payload = {
      id: 3,
      title: 'milk',
    };

    return payload;
  }
}
