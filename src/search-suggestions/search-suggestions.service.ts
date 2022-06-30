import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchSuggestionsService {
  getSearchSuggestions(): string {
    return 'All Search Suggestions!';
  }
}
