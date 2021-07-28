import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    const payload = {
      id: 3,
      name: 'Jac',
    };

    return payload;
  }
}
