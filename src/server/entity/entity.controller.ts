import { Body, Controller, Post } from "@nestjs/common";
import {EntityService} from './entity.service'
import { createEntity, EntityInfo } from "./entity.dto";
import { UserInfo } from "./entity.dto";

@Controller('entity')
export class EntityController {
  constructor(private readonly EntityService: EntityService){}

  @Post('addEntity')
  async addEntity(@Body() createEntity: createEntity){
    return {
      code: 200,
      data: await this.EntityService.addEntity(createEntity),
      message: 'Success.'
    };
  }

  @Post('getEntityList')
  async getEntityList(@Body() UserInfo: UserInfo){
    return {
      code: 200,
      data: await this.EntityService.getEntityList(UserInfo),
      message: 'Sucess'
    }
  }

  @Post('addEntityItem')
  async addEntityItem(@Body() EntityInfo: EntityInfo){
    return {
      code: 200,
      data: await this.EntityService.addEntityItem(EntityInfo),
      message: 'Sucess'
    }
  }
  
  @Post('getEntityItem')
  async getEntityItem(@Body() EntityInfo: EntityInfo){
    return {
      code: 200,
      data: await this.EntityService.getEntityItem(EntityInfo),
      message: 'Sucess'
    }
  }

  @Post('delEntityItem')
  async delEntityItem(@Body() EntityInfo: EntityInfo){
    return {
      code: 200,
      data: await this.EntityService.delEntityItem(EntityInfo),
      message: 'Sucess'
    }
  }
}
