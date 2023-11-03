import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TalkRecord } from './talk-record.interface';
import { Model } from 'mongoose'
import { createTalkRecord,addOneToTalkRecord,findTalkRecord,findAllTalk } from "./talk-record.dto";

@Injectable()
export class TalkRecordService {
  constructor(@InjectModel('TalkRecord') private readonly TalkRecordModel:Model<TalkRecord>){}

  async addTalkRecord(body: createTalkRecord): Promise<void>{
    let record = await this.TalkRecordModel.findOne({fromName: body.fromName, toName: body.toName})
    if(!record) {
      record = await this.TalkRecordModel.findOne({fromName: body.toName, toName: body.fromName})
    }
    if(!record) {
      await this.TalkRecordModel.create(body)
    }
  }

  async findReacordMessageList(body: findTalkRecord): Promise<TalkRecord>{
    const result = await this.TalkRecordModel.findOne({fromName: body.fromName, toName: body.toName});
    if(result) {
      return result
    }else{
      return await this.TalkRecordModel.findOne({fromName: body.toName, toName: body.fromName});
    }
  }

  async findAllTalkRecord(body: findAllTalk) :Promise<Array<string>>{
    const record = await this.TalkRecordModel.find({fromName: body.fromName})
    const record2 = await this.TalkRecordModel.find({toName: body.fromName})
    return [...record.map(item => {
      return item.toName
    }), ...record2.map(item => {
      return item.fromName
    })]
  }
  
  async addOneToTalkRecord(body: addOneToTalkRecord): Promise<void>{
    let talkRecord = await this.TalkRecordModel.findOne({fromName: body.fromName, toName: body.toName});
    if(!talkRecord) {
      talkRecord = await this.TalkRecordModel.findOne({fromName: body.toName, toName: body.fromName});
      await this.TalkRecordModel.updateOne({fromName: body.toName, toName: body.fromName},{messageList: [...talkRecord.messageList, body.message]});
    }else{
      await this.TalkRecordModel.updateOne({fromName: body.fromName, toName: body.toName},{messageList: [...talkRecord.messageList, body.message]});
    }
  }
}
