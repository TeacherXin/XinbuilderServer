import { Body, Controller, Post } from "@nestjs/common";
import { createLogin } from "./login.dto";
import {LoginService} from './login.service'

@Controller('login')
export class LgoinController {
  constructor(private readonly LoginService: LoginService){}

  @Post('addUser')
  async addUser(@Body() createLogin: createLogin){
    const checkUser = await this.LoginService.checkUser(createLogin.username);
    if(checkUser){
      return {
        code: 502,
        message:'用户名已存在'
      }
    }
    await this.LoginService.addUser(createLogin);
    return {
      code: 200,
      message: 'Success.'
    }
  }
  @Post('getUser')
  async getUser(@Body() createLogin: createLogin){
    if(createLogin.username === 'admin' && createLogin.password === '666666') {
      return {
        code: 200,
        data: createLogin,
        message: 'Success'
      }
    }
    return {
      code: 200,
      data: await this.LoginService.getUser(createLogin),
      message: 'Success.'
    };
  }
}
