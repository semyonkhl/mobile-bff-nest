import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getHealthCheck(): string {
    return 'Health Check!';
  }
}
