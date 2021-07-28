import { Entity } from '@scalio-oss/nest-couchbase';

@Entity('users')
export class Users {
  name: string;
  orders: string[];
}
