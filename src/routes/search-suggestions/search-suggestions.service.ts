import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { CatalogService } from '../../api-config/services/catalog.service';
import { HelpersService } from '../../helpers/helpers.service';

@Injectable()
export class SearchSuggestionsService {
  constructor(
    private readonly catalogService: CatalogService,
    private readonly helpersService: HelpersService,
  ) {}

  getSearchSuggestions(req) {
    const { latLong, includeIpAddress, ...params } =
      this.helpersService.getParams(req, [
        'query',
        'regionId',
        'latLong',
        'includeIpAddress',
        'radius',
      ]);

    const shouldIncludeIpAddress = [true, true.toString()].includes(
      includeIpAddress,
    );

    // Lat/long takes precedence over IP address
    if (latLong) params.fromLocation = latLong;
    else if (shouldIncludeIpAddress)
      params.fromLocation = this.helpersService.getIpAddress(req);

    return this.catalogService
      .get(`search-suggestions`, { params })
      .pipe(map((response) => response.data));
  }
}
