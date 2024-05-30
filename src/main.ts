import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './App.module';
import { version } from '../package.json';
import { ConfigSchema } from '@Services/config/ConfigSchema';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    logger: process.env.NODE_ENV === 'production' ? ['error', 'warn', 'log'] : ['error', 'warn', 'log', 'debug'],
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('IT-Skill Spectrum Backend')
    .setDescription('IT-Skill Spectrum Backend Service API')
    .setVersion(version)
    .build();

  const config = app.get(ConfigSchema);

  process.env.DATABASE_URL = `postgresql://${config.database.user}:${config.database.password}@${config.database.ip}:${config.database.port}/${config.database.name}`;

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(config.port, '0.0.0.0');
  logger.log(`IT-Skill Spectrum Backend ${version} is ready on port ${config.port}`);
}

void bootstrap();
