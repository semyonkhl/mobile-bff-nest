import { Body, Controller, Post } from '@nestjs/common';
import { GetQuoteDto } from './dto/get-quote.dto';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post()
  getQuote(@Body() getQuoteDto: GetQuoteDto): string {
    return this.quoteService.getQuote(getQuoteDto);
  }
}
