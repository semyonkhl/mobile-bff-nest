import { Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';

import { CatalogService } from '../../api-config/services/catalog.service';
import { HelpersService } from '../../helpers/helpers.service';
import { CACHE_ASSETS } from './constants';

@Injectable()
export class AssetsService {
  constructor(
    private readonly catalogService: CatalogService,
    private readonly helpersService: HelpersService,
  ) {}

  async getAssets(req, res) {
    const params = this.helpersService.getParams(
      req,
      ['resource', 'resourceId', 'page', 'pageSize'],
      true,
    );

    const { resourceId, ...rest } = params;

    let resourceIdQueryString = `?resourceId=${resourceId}`;
    if (resourceId && resourceId instanceof Array) {
      resourceIdQueryString = '?'.concat(
        resourceId.map((value: number) => `resourceId=${value}`).join('&'),
      );
    }

    const response = await lastValueFrom(
      this.catalogService
        .get(`assets${resourceIdQueryString}`, {
          params: { ...rest },
        })
        .pipe(
          map((res) => {
            return res.data;
          }),
        ),
    );

    if (
      !this.helpersService.isImagePayloadInvalid(
        resourceIdQueryString,
        response,
      )
    ) {
      res.setHeader('Cache-Control', CACHE_ASSETS);
    }
    return response;
  }
}
