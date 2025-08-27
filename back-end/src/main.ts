import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8081',  // Permite requisições apenas do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Caso precise de cookies ou credenciais
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
