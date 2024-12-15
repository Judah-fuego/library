import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip extra properties
      forbidNonWhitelisted: true, // Throw error if extra properties are present
      transform: true, // Automatically transform payload to DTO type
    }),
  );

  await app.listen(3000);
}
bootstrap();
