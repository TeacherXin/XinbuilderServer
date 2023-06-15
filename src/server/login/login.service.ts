import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import {createLogin} from './login.dto'
import {Login} from './login.interface'


@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private readonly LoginModal:Model<Login>){}

  async addUser(body: createLogin): Promise<void>{
    await this.LoginModal.create(body)
  }
  async getUser(body: createLogin): Promise<Login>{
    return await this.LoginModal.findOne({username: body.username,password: body.password})
  }
  async checkUser(username: string): Promise<boolean>{
    const user = await this.LoginModal.findOne({username: username});
    if(user){
      return true
    }else{
      return false
    }
  }
}
