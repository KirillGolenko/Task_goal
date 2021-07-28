import { Entity } from '@scalio-oss/nest-couchbase';

@Entity('orders')
export class Orders {
  productId: number;
}
