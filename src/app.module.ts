import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pageJsonModal } from './server/pageJson/pageJson.module'
import { UploadModule } from './server/upload/upload.module';


const DBRootModule = MongooseModule.forRoot('mongodb://localhost/localData');

@Module({
  imports: [DBRootModule,pageJsonModal, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
