import { Injectable } from '@nestjs/common';

@Injectable()
export class RegionsService {
  getRegions(): string {
    return 'All Regions!';
  }
}
