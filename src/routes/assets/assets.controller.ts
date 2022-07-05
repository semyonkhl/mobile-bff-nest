import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HelpersService } from 'src/helpers/helpers.service';
import { AssetsService } from './assets.service';
import { CACHE_ASSETS } from './constants';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async getAssets(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.assetsService.getAssets(req, res);
  }
}
