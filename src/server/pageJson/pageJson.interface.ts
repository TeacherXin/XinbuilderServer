import { Document } from 'mongoose';
 
export interface PageJson extends Document {
  readonly pageId: string;
  readonly pageJson: Object;
}