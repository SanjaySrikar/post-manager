import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/admin/models/types';
import { PostService } from 'src/app/admin/services/post/post.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  @Input() post!: Post;
  @Output() postToEdit = new EventEmitter<boolean>();

  constructor(private _postService : PostService , private router : Router) {}

  getDate(timestamp: string | undefined) {
    if (!timestamp) {
      return '';
    }
    const timestampDate: Date = new Date(timestamp);
    const currentDate: Date = new Date();
    const differenceInMillis: number = currentDate.getTime() - timestampDate.getTime();
    const differenceInHours: number = differenceInMillis / (1000 * 60 * 60);

    if (differenceInHours >= 24) {
        const days: number = Math.floor(differenceInHours / 24);
        const remainingHours: number = differenceInHours % 24;
        return Math.floor(days) + ' days ago';
    }
    return Math.floor(differenceInHours) + ' hours ago';
  }

  deletePost(user_id: string , post_id:string){
    this._postService.deletePost(user_id, post_id).subscribe((data) => {
      if(data.body?.id){
        alert('Post deleted successfully.');
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      }
    });
  }

  editPost(){
    this.postToEdit.emit(true);
  }

  ngOnInit(): void {}
}
