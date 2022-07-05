import { Module } from '@nestjs/common';
import { CatalogService } from 'src/api-config/services/catalog.service';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService],
})
export class VenuesModule {}
