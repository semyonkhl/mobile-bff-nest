import { Injectable } from '@nestjs/common';
import { CatalogService } from '../../api-config/services/catalog.service';
import { HelpersService } from '../../helpers/helpers.service';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly catalogService: CatalogService,
    private readonly helpersService: HelpersService,
  ) {}

  getCategoryById(id: string): string {
    const { categoryId } = this.helpersService.getParams(
      req,
      ['categoryId'],
      true,
    );

    if (isNaN(Number(categoryId))) {
      return res.status(400).send({
        error: '[categoryId] parameter is required and must be a number.',
      });
    }

    const cmsRequestUrl = `${CMS_ENDPOINTS.GET_CATEGORIES}?catalogId=${categoryId}`;

    // Check category in the cache prior to making an API request to CMS service
    let category: HermesCmsCategory | undefined = cache.get(cmsRequestUrl);
    if (!category) {
      const response = await cmsService.get<CmsCategoriesResponse>(
        cmsRequestUrl,
      );

      if (!response.data.length) {
        return res.status(404).send({ error: 'Category not found.' });
      }

      // Transform category to Hermes format
      category = toHermesCmsCategory(response.data[0]);

      // Persist category to the cache
      cache.set(cmsRequestUrl, category, CACHE_CATEGORIES_AGE_IN_SECS);
    }

    res.setHeader('Cache-Control', CACHE_CATEGORIES);
    return `Category with ${id}`;
  }

  searchSubCategory(id: string): string {
    return `Sub-category in category by ${id}`;
  }
}
