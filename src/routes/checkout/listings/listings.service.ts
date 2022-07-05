import { Injectable } from '@nestjs/common';

@Injectable()
export class ListingsService {
  getListingsById(id: string): string {
    return `Listing by ${id}`;
  }
}
