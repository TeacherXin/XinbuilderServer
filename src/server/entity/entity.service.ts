import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model,Schema } from 'mongoose'
import {createEntity} from './entity.dto'
import { Entity } from "./entity.interface";
import { UserInfo } from "./entity.dto";
import { EntityInfo } from "./entity.dto";

const DBRootModule = mongoose.createConnection('mongodb://127.0.0.1/localData');

@Injectable()
export class EntityService {
  constructor(@InjectModel('Entity') private readonly EntityModule:Model<Entity>){}

  async addEntity(body: createEntity): Promise<void> {
    await this.EntityModule.create(body)
    DBRootModule.model(body.entityCode,new Schema(body.entitySchema),body.entityCode);
  }

  async getEntityList(body: UserInfo): Promise<Entity []> {
    const entityList = await this.EntityModule.find({username: body.username});
    return entityList
  }

  async addEntityItem(body: EntityInfo): Promise<void> {
    const Model = DBRootModule.model(body.entityCode);
    await Model.create({...body.entityParam})
  }

  async getEntityItem(body: EntityInfo): Promise<Object []> {
    const Model = DBRootModule.model(body.entityCode);
    return Model.find()
  }

  async delEntityItem(body: EntityInfo): Promise<void> {
    if(!body.entityCode){
      return;
    }
    await this.EntityModule.deleteOne({entityCode: body.entityCode});
    DBRootModule.dropCollection(body.entityCode)
  }
}
