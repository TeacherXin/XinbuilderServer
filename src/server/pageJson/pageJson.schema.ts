import { Schema } from 'mongoose';
 
export const pageJsonSchema = new Schema({
  pageId: { type: String, required: true },
  pageName: { type: String, required: true },
  pageJson: { type: Object, required: true },
  username: { type: String, required: true},
  isRelease: {type: Boolean, required: false},
  isMobile: {type: Boolean, required: false},
  is3D: {type: Boolean, required: false}
});