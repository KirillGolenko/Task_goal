import { Controller, Get, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('getUser')
  getOrders(id: string) {
    return this.usersService.getUser(id);
  }

  @Get()
  getUser(@Query() query) {
    const { id } = query;
    return this.usersService.getUser(id);
  }
}
