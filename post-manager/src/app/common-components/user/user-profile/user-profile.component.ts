import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/admin/models/types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  showPost(){

  }

}
