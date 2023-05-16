import { Controller, Post,UseInterceptors,UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
// FileInterceptor用于单文件上传，FilesInterceptor用于多文件上传
import {FileInterceptor,FilesInterceptor} from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('album')
  // UseInterceptors 处理文件的中间件，file是一个标识名
  @UseInterceptors(FileInterceptor('file'))
  // UploadedFile装饰器是用于读取文件的
  upload (@UploadedFile() file) {
    console.log("file：",file)
    return file
  }
}
