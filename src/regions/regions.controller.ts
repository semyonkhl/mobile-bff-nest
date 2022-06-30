import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly RegionsService: RegionsService) {}

  @Get()
  getRegions(): string {
    return this.RegionsService.getRegions();
  }
}
