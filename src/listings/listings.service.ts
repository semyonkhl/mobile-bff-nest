import { Injectable } from '@nestjs/common';

@Injectable()
export class ListingsService {
  getListings(): string {
    return 'All Listings!';
  }

  getListingsById(id: string): string {
    return `Listing By ${id}`;
  }
}
