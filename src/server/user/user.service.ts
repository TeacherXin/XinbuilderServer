/**
 * 新建 provider
 * @dependence nest g service user server
 */
 import { Injectable } from '@nestjs/common';
 
 // 为了在 user.service 中操作数据库
 import { InjectModel } from '@nestjs/mongoose';
 import { Model } from 'mongoose';
  
 // 引入数据类型
 import { CreateUserDTO, EditUserDTO } from './user.dto';
 import { User } from './user.interface';
  
 @Injectable()
 export class UserService {
   // 构造函数，让 user.service 在实例化时，能够接收到数据库 Model，进而操作数据库
   constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}
  
   /**
    * mongoose 操作数据库是异步的，所以使用 async/await
    */
   
   // 查找所有用户
   async findAll(): Promise<User[]> {
     const users = await this.userModel.find();
     return users;
   }
  
   // 查找单个用户
   async findOne(_id: string): Promise<User> {
     return await this.userModel.findById(_id);
   }
  
   // 添加单个用户
   async addOne(body: CreateUserDTO): Promise<void> {
     await this.userModel.create(body);
   }
  
   // 编辑单个用户
   async editOne(_id: string, body: EditUserDTO): Promise<void> {
     await this.userModel.findByIdAndUpdate(_id, body);
   }
  
   // 删除单个用户
   async deleteOne(_id: string): Promise<void> {
     await this.userModel.findByIdAndDelete(_id);
   }
 }