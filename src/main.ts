import { AppModule } from '@infra/modules/app/app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;

  app.enableVersioning({ type: VersioningType.URI });
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
