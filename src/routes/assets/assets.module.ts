import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiConfigModule } from 'src/api-config/api-config.module';
import { HelpersModule } from '../../helpers/helpers.module';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';

@Module({
  imports: [ApiConfigModule, HelpersModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
