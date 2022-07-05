import { Controller, Get, Param } from '@nestjs/common';
import { PerformersService } from './performers.service';

@Controller('performers')
export class PerformersController {
  constructor(private readonly performersService: PerformersService) {}

  @Get()
  getListings(): string {
    return this.performersService.getPerformers();
  }

  @Get('related')
  getRelatedPerformers(): string {
    return this.performersService.getRelatedPerformers();
  }

  @Get('navigation')
  getPerformersForNavigation(): string {
    return this.performersService.getPerformersForNavigation();
  }

  @Get(':id/opponents')
  getPerformerOpponentsById(@Param('id') id: string): string {
    return this.performersService.getPerformerOpponentsById(id);
  }

  @Get(':id/cities')
  getPerformerCitiesById(@Param('id') id: string): string {
    return this.performersService.getPerformerCitiesById(id);
  }
}
