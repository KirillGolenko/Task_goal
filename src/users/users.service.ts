import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@scalio-oss/nest-couchbase';
import { Users } from 'src/entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly ordersRepository: Repository<Users>,
  ) {}

  getUser(id: string): Promise<Users> {
    return this.ordersRepository.get(id);
  }
}
