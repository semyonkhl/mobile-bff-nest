import { Module } from '@nestjs/common';

import { PerformersController } from './performers.controller';
import { PerformersService } from './performers.service';

@Module({
  imports: [],
  controllers: [PerformersController],
  providers: [PerformersService],
})
export class PerformersModule {}
