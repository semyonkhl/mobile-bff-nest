import { Controller, Get, Param } from '@nestjs/common';
import { SitemapService } from './sitemap.service';

@Controller('sitemap')
export class SitemapController {
  constructor(private readonly SitemapService: SitemapService) {}

  @Get('/performers/:firstCharacter')
  getPerformersByFirstCharacter(
    @Param('firstCharacter') firstCharacter: string,
  ): string {
    return this.SitemapService.getPerformersByFirstCharacter(firstCharacter);
  }

  @Get('/venues/:firstCharacter')
  getVenuesByFirstCharacter(
    @Param('firstCharacter') firstCharacter: string,
  ): string {
    return this.SitemapService.getVenuesByFirstCharacter(firstCharacter);
  }
}
