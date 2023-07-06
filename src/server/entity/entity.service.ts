import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model,Schema } from 'mongoose'
import {createEntity} from './entity.dto'
import { Entity } from "./entity.interface";
import { UserInfo } from "./entity.dto";
import { EntityInfo } from "./entity.dto";

@Injectable()
export class EntityService {
  constructor(@InjectModel('Entity') private readonly EntityModule:Model<Entity>){}

  async addEntity(body: createEntity): Promise<void> {
    await this.EntityModule.create(body)
    const DBRootModule = mongoose.createConnection('mongodb://127.0.0.1/localData');
    DBRootModule.model(body.entityCode,new Schema(body.entitySchema));
  }

  async getEntityList(body: UserInfo): Promise<Entity []> {
    const entityList = await this.EntityModule.find({username: body.username});
    return entityList
  }

  async addEntityItem(body: EntityInfo): Promise<void> {
    const DBRootModule = mongoose.createConnection('mongodb://127.0.0.1/localData');
    const entity = await this.EntityModule.findOne({entityCode: body.entityCode})
    const Model = DBRootModule.model(body.entityCode,new Schema(entity.entitySchema));
    await Model.create({...body.entityParam})
  }

  async getEntityItem(body: EntityInfo): Promise<Object []> {
    const DBRootModule = mongoose.createConnection('mongodb://127.0.0.1/localData');
    const entity = await this.EntityModule.findOne({entityCode: body.entityCode});
    const Model = DBRootModule.model(body.entityCode,new Schema(entity.entitySchema));
    return Model.find()
  }
}
