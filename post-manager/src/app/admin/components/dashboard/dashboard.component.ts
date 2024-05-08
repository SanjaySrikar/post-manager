import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user_id!: string;
  postToEdit!: Post;
  constructor() {}

  ngOnInit(): void {}

  showUserPost(user_id: string) {
    this.user_id = user_id;
  }
  sendPostToEdit(post: Post) {
    this.postToEdit = post;
  }
}
