import { Document } from 'mongoose';
 
export interface Entity extends Document {
  readonly entityName: string
  readonly entityCode: string
  readonly username: string
  readonly entitySchema: Object
}