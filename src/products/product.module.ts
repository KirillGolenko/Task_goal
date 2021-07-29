import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { Products } from 'src/entity/products.entity';

@Module({
  imports: [
    CouchbaseModule.forFeature([Products]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
