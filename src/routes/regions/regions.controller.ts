import { Controller, Get, Res, HttpStatus, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import { RegionsService } from './regions.service';
import { CACHE_REGIONS } from './constants';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  getRegions(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const response = this.regionsService.getRegions(req);
    res.setHeader('Cache-Control', CACHE_REGIONS);
    res.status(HttpStatus.OK);
    return response;
  }
}
