import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../../models/types';
import { Observable } from 'rxjs';

type UserResponse = HttpResponse<IUser[]>;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http : HttpClient) { }

  get(): Observable<UserResponse>{
    return this.http.get<IUser[]>(`${environment.BASE_URL}` + '/users', {observe:'response'});
  }

}
