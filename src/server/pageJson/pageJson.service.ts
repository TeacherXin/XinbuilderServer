/**
 * 新建 provider
 * @dependence nest g service user server
 */
 import { Injectable } from '@nestjs/common';
 
 // 为了在 user.service 中操作数据库
 import { InjectModel } from '@nestjs/mongoose';
 import { Model } from 'mongoose';
 import { CreatePage, EditPage, PageInfo } from './pageJson.dto';
 import { PageJson } from './pageJson.interface';

 @Injectable()
 export class PageService {
   // 构造函数，让 user.service 在实例化时，能够接收到数据库 Model，进而操作数据库
  constructor(@InjectModel('PageJson') private readonly userModel: Model<PageJson>) {}

  /**
  * mongoose 操作数据库是异步的，所以使用 async/await
  */

  async addPage(body: CreatePage): Promise<void>{
    await this.userModel.create(body)
  }

  async findPageByID(pageInfo: PageInfo): Promise<PageJson>{
    return await this.userModel.findOne({"pageId":pageInfo.pageId})
  }

  async findAllPage(): Promise<PageJson []>{
    return await this.userModel.find()
  }

  async updatePage(body: CreatePage): Promise<void>{
    await this.userModel.updateOne({pageId: body.pageId},{pageJson: body.pageJson})
  }

  async deletePage(pageInfo: PageInfo): Promise<void>{
    await this.userModel.deleteOne({"pageId":pageInfo.pageId})
  }

 }