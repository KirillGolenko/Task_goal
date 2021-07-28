import { Entity } from '@scalio-oss/nest-couchbase';

@Entity('product')
export class Products {
  title: string;
}
