import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
//my concept that i learned from my mentor i took it in simple wording
//we use nest factory in order to create nestjs app
// this is the file that is used in order to ootstrap nest js
//this is the main and connected with app.module.ts
//app.module is the file where the all over the app connected or imported here
//app module its like  center of app that that connect nest js with whole app
