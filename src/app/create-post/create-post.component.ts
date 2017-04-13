import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Social } from '../shared/CSocial'
import {socials} from "../shared/socials";

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = "Create a post";
  subtitle: string = "Create one post and send it to defferent socials network";
  imagePath: string = "/assets/create-post/"
  noSocialsChosen: boolean = false;
  socials: Social[] = [];
  socialsToPost: Social[] = [];
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.socials = this.service.getSocials();
    //document.getElementsByTagName("html").style.width = "12px";
    //document.documentElement. .style.overflow = "hidden";
  }

  noSocials(): boolean {
    let empty = true;
    for (let i = 0; i < this.socials.length; i++) {
      if (this.socials[i].logInStatus) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  socialToggle(social: Social, switchin: HTMLInputElement): void {
    if (switchin.checked)
      this.socialsToPost.push(social);
    else {
      let index = this.socialsToPost.indexOf(social);
      this.socialsToPost.splice(index, 1);
    }
  }
  sendPost(text: string, event: Event) {
    event.preventDefault();
    if (!this.socialsToPost.length) {
      this.noSocialsChosen = true;
      return;
    }
    //THIS IS FOR IHOOOOOOOOR
  }
}
