import { Controller, Get, Param } from '@nestjs/common';
import { ProductionService } from './production.service';

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get(':id')
  getProductionById(@Param('id') id: string): string {
    return this.productionService.getProductionById(id);
  }
}
