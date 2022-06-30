import { Controller, Get, Param } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get('/:listingId')
  getListingsById(@Param('listingId') id: string): string {
    return this.listingsService.getListingsById(id);
  }
}
