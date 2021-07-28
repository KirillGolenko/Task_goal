import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('getProduct')
  getOrders() {
    return this.productsService.getProducts();
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}
