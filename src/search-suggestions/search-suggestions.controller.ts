import { Controller, Get } from '@nestjs/common';
import { SearchSuggestionsService } from './search-suggestions.service';

@Controller('search-suggestions')
export class SearchSuggestionsController {
  constructor(
    private readonly SearchSuggestionsService: SearchSuggestionsService,
  ) {}

  @Get()
  getSearchSuggestions(): string {
    return this.SearchSuggestionsService.getSearchSuggestions();
  }
}
