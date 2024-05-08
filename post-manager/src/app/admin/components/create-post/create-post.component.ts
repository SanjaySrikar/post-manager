import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPostRequestBody, Post } from '../../models/types';
import { PostService } from '../../services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit, OnChanges {
  @Input() editMode!: boolean;
  @Input() user_id!: string;
  @Input() postToEdit!: Post;
  post!: Post;

  constructor(private _postService: PostService, private router: Router) {
    this.post = {
      createdAt: '',
      Title: '',
      content: '',
      id: '',
      userId: '',
    };
  }

  ngOnChanges(): void {
    if (this.editMode) {
      this.post = this.postToEdit;
    }
  }

  ngOnInit(): void {}

  noEdit() {
    this.post = {
      createdAt: '',
      Title: '',
      content: '',
      id: '',
      userId: '',
    };
    this.editMode = false;
  }

  clearPost() {
    this.post = {
      createdAt: '',
      Title: '',
      content: '',
      id: '',
      userId: '',
    };
  }

  createPost() {
    if (this.editMode === true) {
      this.editPost();
    } else {
      this.post.createdAt = new Date().toISOString();
      this.post.userId = this.user_id;
      let req: IPostRequestBody = {
        author: {
          userId: this.user_id,
          name: this.post.author?.name,
          avatar: this.post.author?.avatar,
          createdAt: this.post.createdAt,
        },
        Title: this.post.Title,
        content: this.post.content,
        createdAt: this.post.createdAt,
      };
      this._postService.post(req).subscribe({
        next: (res) => {
          alert('Post created successfully.');
          this.router.navigate(['/dashboard']).then(() => {
            window.location.reload();
          });
          this.post = {
            createdAt: '',
            Title: '',
            content: '',
            id: '',
            userId: '',
          };
        },
        error: (err) => {
          console.log(err);
          this.post = {
            createdAt: '',
            Title: '',
            content: '',
            id: '',
            userId: '',
          };
        },
      });
    }
  }
  editPost() {
    if (this.post.id) {
      let req: IPostRequestBody = {
        author: {
          userId: this.user_id,
          name: this.post.author?.name,
          avatar: this.post.author?.avatar,
          createdAt: this.post.createdAt,
        },
        Title: this.post.Title,
        content: this.post.content,
        createdAt: this.post.createdAt,
      };

      this._postService
        .editPost(this.user_id, this.post.id, this.post)
        .subscribe({
          next: (res) => {
            alert('Post edited successfully.');
            this.router.navigate(['/dashboard']).then(() => {
              window.location.reload();
            });
            this.post = {
              createdAt: '',
              Title: '',
              content: '',
              id: '',
              userId: '',
            };
          },
          error: (err) => {
            console.log(err);
            this.post = {
              createdAt: '',
              Title: '',
              content: '',
              id: '',
              userId: '',
            };
          },
        });
    }
  }
}
