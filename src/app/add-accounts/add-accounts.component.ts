import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.css']
})
export class AddAccountsComponent implements OnInit {
  title: string = "Add accounts";
  subtitle: string = "The more accounts you add, the more comfortable it will be for you";
  constructor() { }

  ngOnInit() {
  }

}
