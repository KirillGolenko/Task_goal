import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@scalio-oss/nest-couchbase';
import { Products } from 'src/entity/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  getProducts(id: string): Promise<Products> {
    return this.productRepository.get(id);
  }
}
