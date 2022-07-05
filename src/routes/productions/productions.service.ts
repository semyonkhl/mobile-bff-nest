import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductionsService {
  getProductions(): string {
    return 'All Productions!';
  }

  getRelatedProductions(): string {
    return `Related Productions`;
  }

  getProductionById(id: string): string {
    return `Production with ${id}`;
  }

  getProductionDetailsById(id: string): string {
    return `Production Details by ${id}`;
  }

  getProductionLicensesById(id: string): string {
    return `Production Licenses by ${id}`;
  }
}
