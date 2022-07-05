import { Controller, Get, Param } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  getListings(): string {
    return this.listingsService.getListings();
  }

  @Get(':id')
  getListingsById(@Param('id') id: string): string {
    return this.listingsService.getListingsById(id);
  }
}
