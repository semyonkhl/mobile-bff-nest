import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const API_DEFAULT_PORT = 8000;
const API_DEFAULT_PREFIX = '/api/v1/';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
