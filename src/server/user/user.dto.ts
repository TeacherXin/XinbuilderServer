// 新建用户
export class CreateUserDTO {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}
 
// 编辑用户
export class EditUserDTO {
  readonly user_name: string;
  readonly password: string;
}