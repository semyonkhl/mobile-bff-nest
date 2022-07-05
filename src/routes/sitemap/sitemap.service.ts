import { Injectable } from '@nestjs/common';

@Injectable()
export class SitemapService {
  getPerformersByFirstCharacter(firstCharacter): string {
    return `Sitemap for Performers by ${firstCharacter}`;
  }

  getVenuesByFirstCharacter(firstCharacter): string {
    return `Sitemap for Venues by ${firstCharacter}`;
  }
}
