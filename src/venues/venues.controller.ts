import { Controller, Get } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
  constructor(private readonly VenuesService: VenuesService) {}

  @Get()
  getVenues(): string {
    return this.VenuesService.getVenues();
  }

  @Get('related')
  getRelatedVenues(): string {
    return this.VenuesService.getRelatedVenues();
  }
}
