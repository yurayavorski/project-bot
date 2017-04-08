import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service'
import { Social } from '../shared/CSocial'

@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.css']
})
export class AddAccountsComponent implements OnInit {
  title: string = "Add accounts";
  subtitle: string = "The more accounts you add, the more comfortable it will be for you";
  socials: Social[];
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.socials = this.service.getSocials();
  }

  socialClick(id: number) {
    alert(id);
  }
}
