import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HelpersModule } from 'src/helpers/helpers.module';

import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://catalog-service.corp.int.vividseats-staging.com',
    }),
    HelpersModule,
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
