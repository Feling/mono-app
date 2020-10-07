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
    .setTitle('Message exchange App')
    .setDescription('nestjs + redis.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(appConfig.port);
}
bootstrap();
