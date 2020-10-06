import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
    });
  const appConfig: AppConfigService = app.get('AppConfigService');

  const options = new DocumentBuilder()
    .setTitle('Monolith App')
    .setDescription('Exercise with monolith impl.')
    .setVersion('1.0')
    .addTag('monolith')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(appConfig.port);
}
bootstrap();
