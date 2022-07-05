import { Module } from '@nestjs/common';
import { LogModule } from '../log/log.module';
import { HelpersService } from './helpers.service';

@Module({
  imports: [LogModule],
  providers: [HelpersService],
  exports: [HelpersService],
})
export class HelpersModule {}
