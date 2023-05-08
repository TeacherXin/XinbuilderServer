import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{ cors: true });
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/' });  //设置虚拟路径
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 放视图的文件
  app.setViewEngine('ejs');
  await app.listen(3003);
}
bootstrap();
