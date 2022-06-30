import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getCategoryById(id: string): string {
    return `Category with ${id}`;
  }

  searchSubCategory(id: string): string {
    return `Sub-category in category by ${id}`;
  }
}
