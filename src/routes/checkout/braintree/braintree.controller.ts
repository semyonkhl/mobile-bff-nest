import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { BraintreeService } from './braintree.service';
import { TransactionDto } from './dto/transaction.dto';

@Controller('braintree')
export class BraintreeController {
  constructor(private readonly braintreeService: BraintreeService) {}

  @Get('client_token')
  getClientToken(): string {
    return this.braintreeService.getClientToken();
  }

  @Post('transaction')
  transaction(@Body() transactionDto: TransactionDto): string {
    return this.braintreeService.transaction(transactionDto);
  }
}
