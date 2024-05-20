import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Projeto BlueLotus')
    .setDescription('Projeto de Sistema de Hotelaria, feito para gerenciamento.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) =>
        new HttpException(
          {
            message: 'Entrada de dados invalida',
            errors: errors,
          },
          HttpStatus.BAD_REQUEST,
        ),
    }),
  );
  await app.listen(4000);
}
bootstrap();