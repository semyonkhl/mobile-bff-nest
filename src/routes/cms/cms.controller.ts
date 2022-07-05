import { Controller, Get, Param } from '@nestjs/common';
import { CmsService } from './cms.service';

@Controller('cms')
export class CmsController {
  constructor(private readonly CmsService: CmsService) {}

  @Get('home')
  getCmsHome(): string {
    return this.CmsService.getCms();
  }

  @Get('regions')
  getCmsRegion(): string {
    return this.CmsService.getCmsRegion();
  }

  @Get('regions/:id')
  getCmsRegionById(@Param('id') id: string): string {
    return this.CmsService.getCmsRegion(id);
  }
}
