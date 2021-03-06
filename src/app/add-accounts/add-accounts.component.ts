import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Social } from '../shared/CSocial';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";



@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.css']
})
export class AddAccountsComponent implements OnInit {
  title: string = "Add accounts";
  subtitle: string = "The more accounts you add, the more comfortable it will be for you";
  imagePath: string = "/assets/add-accounts/";
  socials: Social[];
  constructor(private service: CommonService, private http:Http) { }

  ngOnInit() {
    this.socials = this.service.getSocials();
  }

  getImage(social: Social): string {
    let nameArray = social.imgSrc.split('.');
    if (social.logInStatus) {
      return nameArray[0] + '-white.' + nameArray[1];
    }
    else
      return nameArray[0] + '.' + nameArray[1];
  }

  socialClick(social: Social) {
    social.logInStatus = !social.logInStatus;
    // window.location.href="https://oauth.vk.com/authorize?client_id=5901447&scope=ads,audio,docs,email,friends,groups,pages,wall,notes,notifications,notify,stats,status&redirect_uri=https://homeless.ngrok.io/generatecode&display=page&response_type=code&v=5.62";
  }
}
