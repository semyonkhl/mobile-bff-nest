import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { SearchSuggestionsService } from './search-suggestions.service';

@Controller('search-suggestions')
export class SearchSuggestionsController {
  constructor(
    private readonly SearchSuggestionsService: SearchSuggestionsService,
  ) {}

  @Get()
  getSearchSuggestions(@Req() req: Request) {
    return this.SearchSuggestionsService.getSearchSuggestions(req);
  }
}
