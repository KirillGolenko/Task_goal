import { Get } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('getProduct')
  getOrders(id: string) {
    return this.productsService.getProducts(id);
  }

  @Get()
  getProducts(@Query() query) {
    const { id } = query;
    return this.productsService.getProducts(id);
  }
}
