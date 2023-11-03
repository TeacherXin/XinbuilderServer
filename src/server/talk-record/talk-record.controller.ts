import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TalkRecord } from './talk-record.interface';
import { TalkRecordService } from './talk-record.service'
import { createTalkRecord,addOneToTalkRecord,findTalkRecord,findAllTalk } from "./talk-record.dto";

interface TalkRecordResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('talk-record')
export class TalkRecordController {

  constructor(private readonly TalkRecordService: TalkRecordService) {}

  @Post('findReacordMessageList')
  async findReacordMessageList(@Body() body: findTalkRecord): Promise<TalkRecordResponse<TalkRecord>>{
    return {
      code: 200,
      data: await this.TalkRecordService.findReacordMessageList(body),
      message: 'Success.'
    };
  }

  @Post('findAllTalkRecord')
  async findAllTalkRecord(@Body() body: findAllTalk): Promise<TalkRecordResponse<Array<string>>>{
    return {
      code: 200,
      data: await this.TalkRecordService.findAllTalkRecord(body),
      message: 'Success.'
    };
  }

  @Post('addTalkRecord')
  async addTalkRecord(@Body() body: createTalkRecord): Promise<TalkRecordResponse<TalkRecord>>{
    await this.TalkRecordService.addTalkRecord(body)
    return {
      code: 200,
      message: 'Success.'
    };
  }

  @Post('addOneToTalkRecord')
  async addOneToTalkRecord(@Body() body: addOneToTalkRecord): Promise<TalkRecordResponse<TalkRecord>>{
    await this.TalkRecordService.addOneToTalkRecord(body)
    return {
      code: 200,
      message: 'Success.'
    };
  }
}
