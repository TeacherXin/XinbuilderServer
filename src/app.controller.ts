import { Controller, Get, Render  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  getIndex(): { message: string } {
    return { message: 'hello ejs!' };
  }

  @Get('/renderPage')
  @Render('render')
  getIndex2(): { message: string } {
    return { message: 'hello ejs!' };
  }

  @Get('/builder')
  @Render('builder')
  getInde32(): { message: string } {
    return { message: 'hello ejs!' };
  }
}
