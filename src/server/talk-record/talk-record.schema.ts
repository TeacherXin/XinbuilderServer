import { Schema } from 'mongoose';
import { Message } from './talk-record.interface';
export const talkRecordSchema = new Schema({
  fromName: { type: String, required: true },
  toName: { type: String, required: true },
  messageList: { type: Array<Message>, required: true }
});