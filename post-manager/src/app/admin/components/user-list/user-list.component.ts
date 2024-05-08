import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser, Post } from '../../models/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() showPost = new EventEmitter<string>();
  users: IUser[] = [];
  usersInPage: IUser[] = [];
  currentPage = 0;
  limit!: number;
  totalPages!: number;

  constructor(private _userService: UserService) {
    const windowHeight = window.innerHeight;
    if (windowHeight <= 850) {
      this.limit = 5;
    } else if (windowHeight >= 850) {
      this.limit = 8;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerHeight: any } }) {
    console.log('window height : ', window.innerHeight);
    const newHeight = event.target.innerHeight;
    if (newHeight <= 850) {
      this.limit = 8;
    } else if (newHeight >= 850) {
      this.limit = 8;
    }
    this.getCurrentUsers();
  }

  showPosts(user_id: string | undefined) {
    this.showPost.emit(user_id);
  }
  goToNextPage() {
    console.log(this.currentPage, this.totalPages);
    console.log('window height : ', window.innerHeight);
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.getCurrentUsers();
    }
  }
  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.getCurrentUsers();
    }
  }
  getCurrentUsers() {
    this.usersInPage = this.users.slice(
      this.limit * this.currentPage,
      this.limit * this.currentPage + this.limit
    );
  }

  getUsers() {
    this._userService.get().subscribe(
      (res) => {
        if (res.body) {
          this.users = res.body;
          this.totalPages = Math.floor(this.users.length / this.limit);
          this.getCurrentUsers();
        }
      },
      (err: any) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
