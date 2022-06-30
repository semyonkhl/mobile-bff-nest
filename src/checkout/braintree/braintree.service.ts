import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class BraintreeService {
  getClientToken(): string {
    return 'token';
  }

  transaction(transactionDto: TransactionDto): string {
    return `Transaction created - amount:${transactionDto.amount} created:${transactionDto.paymentMethodNonce} submitted for settlement:${transactionDto.settleImmediately}`;
  }
}
