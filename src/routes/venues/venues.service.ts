import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  getVenues(): string {
    return 'All Venues!';
  }

  getRelatedVenues(): string {
    return 'Related Venues';
  }
}
