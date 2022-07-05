import { Module } from '@nestjs/common';
import { AppLogger } from './log.service';

@Module({
  providers: [AppLogger],
  exports: [AppLogger],
})
export class LogModule {}
