import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformersService {
  getPerformers(): string {
    return 'All Performers!';
  }

  getRelatedPerformers(): string {
    return `Related Performers`;
  }

  getPerformersForNavigation(): string {
    return `Performers For Navigation`;
  }

  getPerformerOpponentsById(id: string): string {
    return `Performer Opponents by ${id}`;
  }

  getPerformerCitiesById(id: string): string {
    return `Performer Cities by ${id}`;
  }
}
