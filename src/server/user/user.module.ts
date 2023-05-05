import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// 引入 Mongoose 模块
import { MongooseModule } from '@nestjs/mongoose';
// 引入用户数据表的格式
import { userSchema } from './user.schema';
 
const UserTable = MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]);
 
@Module({
  imports: [UserTable],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}