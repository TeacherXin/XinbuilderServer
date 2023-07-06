import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pageJsonModal } from './server/pageJson/pageJson.module'
import { UploadModule } from './server/upload/upload.module';
import { LgoinModal } from './server/login/login.module';
import { EntityModal } from './server/entity/entity.module';


const DBRootModule = MongooseModule.forRoot('mongodb://127.0.0.1/localData');
@Module({
  imports: [DBRootModule,pageJsonModal, UploadModule,LgoinModal,EntityModal],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
