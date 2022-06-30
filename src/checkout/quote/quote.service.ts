import { Injectable } from '@nestjs/common';
import { GetQuoteDto } from './dto/get-quote.dto';

@Injectable()
export class QuoteService {
  getQuote(getQuoteDto: GetQuoteDto): string {
    return `quote - email: ${getQuoteDto.email} ticket id: ${getQuoteDto.ticketId} `;
  }
}
