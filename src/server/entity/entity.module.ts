import { Module } from "@nestjs/common";
import { EntityController } from "./entity.controller";
import { EntityService } from "./entity.service";
import { MongooseModule } from '@nestjs/mongoose';
import { EntitySchema } from "./entity.schema";

const EntitySchemaTable = MongooseModule.forFeature([{ name: 'Entity', schema: EntitySchema }]);
console.log(123);

@Module({
  imports: [EntitySchemaTable],
  controllers: [EntityController],
  providers: [EntityService]
})
export class EntityModal {}