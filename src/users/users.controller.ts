import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('getUser')
  getOrders() {
    return this.usersService.getUser();
  }

  @Get()
  getUser() {
    return this.usersService.getUser();
  }
}
