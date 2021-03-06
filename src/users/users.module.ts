import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { Users } from 'src/entity/users.entity';

@Module({
  imports: [
    CouchbaseModule.forFeature([Users]),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
