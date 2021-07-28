import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  await app.startAllMicroservicesAsync();
  await app.listen(5000);
}
bootstrap();
