import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LgoinController } from "./login.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from "./login.schema";

const LoginSchemaTable = MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }]);
@Module({
  imports: [LoginSchemaTable],
  controllers: [LgoinController],
  providers: [LoginService]
})
export class LgoinModal {}