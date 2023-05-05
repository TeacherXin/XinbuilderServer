import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreatePage, EditPage,PageInfo } from './pageJson.dto';
import { PageJson } from './pageJson.interface';
import { PageService } from './pageJson.service'

interface PageJsonResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('pageJson')
export class pageJsonController{

  constructor(private readonly PageService: PageService) {}

  @Post('findPageByID')
  async findPageById(@Body() PageInfo: PageInfo): Promise<PageJsonResponse<PageJson>>{
    return {
      code: 200,
      data: await this.PageService.findPageByID(PageInfo),
      message: 'Success.',
    };
  }

  @Post('addPage')
  async addPage(@Body() pageJson: CreatePage): Promise<PageJsonResponse> {
    await this.PageService.addPage(pageJson);
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
