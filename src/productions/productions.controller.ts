import { Controller, Get, Param } from '@nestjs/common';
import { ProductionsService } from './productions.service';

@Controller('productions')
export class ProductionController {
  constructor(private readonly productionsService: ProductionsService) {}

  @Get()
  getProductions(): string {
    return this.productionsService.getProductions();
  }

  @Get('related')
  getRelatedProductions(): string {
    return this.productionsService.getRelatedProductions();
  }

  @Get(':id')
  getProductionById(@Param('id') id: string): string {
    return this.productionsService.getProductionById(id);
  }

  @Get(':id/details')
  getProductionDetailsById(@Param('id') id: string): string {
    return this.productionsService.getProductionDetailsById(id);
  }

  @Get(':id/licenses')
  getProductionLicensesById(@Param('id') id: string): string {
    return this.productionsService.getProductionLicensesById(id);
  }
}
