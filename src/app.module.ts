import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ListingsModule } from './routes/listings/listings.module';
import { PerformersModule } from './routes/performers/performers.module';
import { ProductionsModule } from './routes/productions/productions.module';
import { CheckoutModule } from './routes/checkout/checkout.module';
import { AssetsModule } from './routes/assets/assets.module';
import { CategoriesModule } from './routes/categories/categories.module';
import { CmsModule } from './routes/cms/cms.module';
import { HealthCheckModule } from './routes/health-check/health-check.module';
import { RegionsModule } from './routes/regions/regions.module';
import { SearchSuggestionsModule } from './routes/search-suggestions/search-suggestions.module';
import { SitemapModule } from './routes/sitemap/sitemap.module';
import { VenuesModule } from './routes/venues/venues.module';
import { StaticPagesModule } from './routes/static-pages/static-pages.module';
import { ApiConfigModule } from './api-config/api-config.module';
import { LogModule } from './log/log.module';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [
    HttpModule,
    ListingsModule,
    PerformersModule,
    ProductionsModule,
    CheckoutModule,
    AssetsModule,
    CategoriesModule,
    CmsModule,
    HealthCheckModule,
    RegionsModule,
    SearchSuggestionsModule,
    SitemapModule,
    StaticPagesModule,
    VenuesModule,
    ApiConfigModule,
    LogModule,
    HelpersModule,
    RouterModule.register([
      {
        path: '/checkout',
        module: CheckoutModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
