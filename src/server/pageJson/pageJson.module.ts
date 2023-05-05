import { Module } from '@nestjs/common';
import { PageService } from './pageJson.service';
import { pageJsonController } from './pageJson.controller'
// 引入 Mongoose 模块
import { MongooseModule } from '@nestjs/mongoose';

import { pageJsonSchema } from './pageJson.schema'

const pageJsonSchemaTable = MongooseModule.forFeature([{ name: 'PageJson', schema: pageJsonSchema }]);
 
@Module({
  imports: [pageJsonSchemaTable],
  controllers: [pageJsonController],
  providers: [PageService]
})
export class pageJsonModal {}