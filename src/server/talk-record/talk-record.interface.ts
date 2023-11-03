import { Document } from 'mongoose';

export interface Message {
  name: string,
  message: string
}
 

export interface TalkRecord extends Document {
  readonly fromName: string;
  readonly toName: string;
  readonly messageList: Array<Message>
}