import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';

@Module({
  imports: [
    OrdersModule,
    ProductsModule,
    UsersModule,
    CustomersModule,
    CouchbaseModule.forRoot({
      url: '127.0.0.1:5984',
      username: 'admin',
      password: 'admin',
      defaultBucket: {
        name: 'admin',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
