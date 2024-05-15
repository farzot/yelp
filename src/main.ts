import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { log } from 'console';
import { LoggerFactory } from './logger/factory';

async function start() {
  const PORT = process.env.PORT;
  try {
    const app = await NestFactory.create(AppModule, {logger: LoggerFactory("Yelp")});
    app.setGlobalPrefix('api');
    app.use(cookieParser());

    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
      .setTitle('Yelp project')
      .setDescription('Mini project for locations of services finding')
      .setVersion('1.0')
      .addTag(
        `
          NodeJS, Validation, Postgres, JWT, SMS, Mailer, Swagger, Sequelizer, NestJS
      `,
      )
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  
    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
  } catch (error) {
    console.log(error.message);    
  }
}
start();
