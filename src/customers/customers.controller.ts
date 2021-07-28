import { Get, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getCustomers(@Query() query) {
    const { id } = query;
    return this.customersService.getCustomers(id);
  }
}
