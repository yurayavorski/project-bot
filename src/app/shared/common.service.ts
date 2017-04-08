import { Injectable } from '@angular/core';
import { UserInfo } from './CUserInfo';
import { userInfo } from './userInfo';
import { Social } from './CSocial'
import { socials } from './socials'

@Injectable()
export class CommonService {
  userInfo: UserInfo = userInfo;
  socials: Social[] = socials;
  constructor() { }
  getUserInfo (): UserInfo {
    return this.userInfo;
  }
  getSocials ():Social[] {
    return this.socials;
  }
}
