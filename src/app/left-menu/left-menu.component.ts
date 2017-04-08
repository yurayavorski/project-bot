import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service'

import { UserInfo } from '../shared/CUserInfo';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.userInfo = this.commonService.getUserInfo();
  }

}
