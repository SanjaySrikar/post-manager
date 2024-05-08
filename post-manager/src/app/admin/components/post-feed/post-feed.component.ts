import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/types';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css'],
})
export class PostFeedComponent implements OnInit, OnChanges {
  @Input() user_id!: string;
  @Output() postToEdit = new EventEmitter<Post>();
  posts: Post[] = [];

  constructor(private _postService: PostService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getPostsByUser(this.user_id);
  }

  editPost(edit : boolean , post : Post){
    // make a copy of post
    let postCopy = {...post};
    this.postToEdit.emit(postCopy);
  }

  getPostsByUser(user_id: string) {
    if (this.user_id !== undefined) {
      this._postService.getPostByUser(user_id).subscribe({
        next: (res) => {
          console.log(res);
          if (res.body) {
            this.posts = res.body;
          }
        },
        error: (err) => {
          console.log(err);
          this.posts = [];
        },
      });
    }
  }
}
