import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductionService {
  getProductionById(id: string): string {
    return `Production by ${id}`;
  }
}
