import { Schema } from 'mongoose';
 
export const EntitySchema = new Schema({
  entityName: { type: String, required: true },
  entityCode: { type: String, required: true },
  username: { type: String, required: true },
  entitySchema: {type: Object, required: true}
});