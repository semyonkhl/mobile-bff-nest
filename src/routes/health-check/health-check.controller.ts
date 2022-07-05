import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly HealthCheckService: HealthCheckService) {}

  @Get()
  getHealthCheck(): string {
    return this.HealthCheckService.getHealthCheck();
  }
}
