import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import Bottleneck from 'bottleneck';

@Injectable()
export class AppLogger implements Partial<LoggerService> {
  private logger: winston.Logger;
  private bottleneck: Bottleneck;

  constructor() {
    this.bottleneck = new Bottleneck({
      maxConcurrent: 1,
      minTime: 5,
    });

    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    });
  }

  getLogger(): winston.Logger {
    return this.logger;
  }
  /**
   * Logs an event with winston
   * @param param0.level Log level. e.g. warn, info, error
   * @param param0.message Log message
   */
  log({
    level,
    message,
  }: {
    level: 'warn' | 'info' | 'error';
    message: string;
  }): any {
    if (process.env.NODE_ENV !== 'test') console[level](message);
    this.bottleneck.schedule({}, () => {
      return Promise.resolve(this.getLogger().log({ level, message }));
    });
  }
}
