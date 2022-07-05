import { Module } from '@nestjs/common';
import { CatalogService } from './services/catalog.service';

import Axios from 'axios';
import { AXIOS_INSTANCE_TOKEN } from './constants';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    CatalogService,
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: Axios,
    },
  ],
  exports: [CatalogService],
})
export class ApiConfigModule {}
