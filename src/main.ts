import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { fastifyStatic } from '@fastify/static'
import { join } from 'path';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
  );

  const path = join(__dirname, '..', 'public')
  console.log(path)
  app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/', // optional: default '/'
    constraints: { }, // optional: default {}
    cacheControl: true,
    dotfiles: 'allow'
  })

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
