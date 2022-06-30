import { Controller, Get, Param } from '@nestjs/common';
import { StaticPagesService } from './static-pages.service';

@Controller('static-pages')
export class StaticPagesController {
  constructor(private readonly StaticPagesService: StaticPagesService) {}

  @Get(':slug')
  getStaticPageBySlug(@Param('slug') slug: string): string {
    return this.StaticPagesService.getStaticPageBySlug(slug);
  }
}
