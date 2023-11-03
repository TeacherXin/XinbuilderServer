import { Module } from '@nestjs/common';
import { TalkRecordController } from './talk-record.controller';
import { TalkRecordService } from './talk-record.service';
// 引入 Mongoose 模块
import { MongooseModule } from '@nestjs/mongoose';
import { talkRecordSchema } from './talk-record.schema';

const talkRecordSchemaTable = MongooseModule.forFeature([{ name: 'TalkRecord', schema: talkRecordSchema }]);

@Module({
  imports: [talkRecordSchemaTable],
  controllers: [TalkRecordController],
  providers: [TalkRecordService]
})
export class TalkRecordModule {}
