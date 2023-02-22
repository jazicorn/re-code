import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Cookie browser support
import * as cookieParser from 'cookie-parser';
// Swagger API documentation
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Swagger API Doc Builder From App
    const config = new DocumentBuilder()
        .setTitle('Re-Code')
        .setDescription('Practice your coding skills')
        .setVersion('1.0')
        .addTag('re-code, javascript')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    // Available Port http://localhost:3000/api
    SwaggerModule.setup('api', app, document);
    // Enable Cookies
    app.use(cookieParser());
    // Listen http://localhost:3000
    await app.listen(3000);
}
bootstrap();
