import { Injectable } from '@angular/core';
import { UserInfo } from './CUserInfo';
import { userInfo } from './userInfo';

@Injectable()
export class CommonService {
  userInfo: UserInfo = userInfo;
  constructor() { }
  getUserInfo (): UserInfo {
    return this.userInfo;
  }
}
