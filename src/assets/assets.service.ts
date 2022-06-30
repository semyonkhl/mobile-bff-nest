import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetsService {
  getAssets(): string {
    return 'All Assets!';
  }
}
