import { Schema } from 'mongoose';
 
export const LoginSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});