import { Injectable } from '@nestjs/common';

@Injectable()
export class CmsService {
  getCms(): string {
    return 'All Cms!';
  }

  getCmsRegion(id?: string): string {
    return `All Cms by ${id}!`;
  }
}
