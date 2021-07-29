import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@scalio-oss/nest-couchbase';
import { Orders } from 'src/entity/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  getOrders(id: string): Promise<Orders> {
    return this.ordersRepository.get(id);
  }
}
