import { Module } from '@nestjs/common';

import { ProductionController } from './productions.controller';
import { ProductionsService } from './productions.service';

@Module({
  imports: [],
  controllers: [ProductionController],
  providers: [ProductionsService],
})
export class ProductionsModule {}
