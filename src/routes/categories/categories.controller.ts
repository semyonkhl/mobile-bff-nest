import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':categoryId')
  getCategoriesById(@Param('categoryId') id: string): string {
    return this.categoriesService.getCategoryById(id);
  }

  @Get(':categoryId/search-subcategory')
  searchSubCategory(@Param('categoryId') id: string): string {
    return this.categoriesService.searchSubCategory(id);
  }
}
