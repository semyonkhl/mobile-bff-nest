import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'Nest.js template for BFF Mobile app.';
  }
}
