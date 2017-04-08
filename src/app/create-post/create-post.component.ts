import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = "Create a post";
  subtitle: string = "Create one post and send it to defferent socials network";
  constructor() { }

  ngOnInit() {
  }

}
