import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiConfigModule } from 'src/api-config/api-config.module';
import { HelpersModule } from 'src/helpers/helpers.module';
import { SearchSuggestionsController } from './search-suggestions.controller';
import { SearchSuggestionsService } from './search-suggestions.service';

@Module({
  imports: [ApiConfigModule, HelpersModule],
  controllers: [SearchSuggestionsController],
  providers: [SearchSuggestionsService],
})
export class SearchSuggestionsModule {}
