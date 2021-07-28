import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { Orders } from 'src/entity/orders.entity';

@Module({
  imports: [
    CouchbaseModule.forFeature([Orders]),
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
