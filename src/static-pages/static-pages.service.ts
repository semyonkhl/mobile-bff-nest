import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticPagesService {
  getStaticPageBySlug(slug): string {
    return `Static Page by Slug ${slug}`;
  }
}
