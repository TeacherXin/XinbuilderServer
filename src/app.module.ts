import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './server/user/user.module';
import { pageJsonModal } from './server/pageJson/pageJson.module'


const DBRootModule = MongooseModule.forRoot('mongodb://localhost/localData');

@Module({
  imports: [DBRootModule,UserModule,pageJsonModal],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
