import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ListingsModule } from './listings/listings.module';
import { PerformersModule } from './performers/performers.module';
import { ProductionsModule } from './productions/productions.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AssetsModule } from './assets/assets.module';
import { CategoriesModule } from './categories/categories.module';
import { CmsModule } from './cms/cms.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { RegionsModule } from './regions/regions.module';
import { SearchSuggestionsModule } from './search-suggestions/search-suggestions.module';
import { SitemapModule } from './sitemap/sitemap.module';
import { VenuesModule } from './venues/venues.module';
import { StaticPagesModule } from './static-pages/static-pages.module';

@Module({
  imports: [
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
