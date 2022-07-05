import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

import { HelpersService } from '../../helpers/helpers.service';

@Injectable()
export class RegionsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly helpersService: HelpersService,
  ) {}

  getRegions(req) {
    const params = this.helpersService.getParams(req, [
      'ip',
      'latitude',
      'longitude',
      'page',
      'pageSize',
    ]);
    console.log(params);
    return this.httpService
      .get('api/v1/regions', { params })
      .pipe(map((response) => response.data));
  }
}
