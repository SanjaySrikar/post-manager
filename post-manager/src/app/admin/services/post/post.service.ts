import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostRequestBody, Post } from '../../models/types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

type PostResponse = HttpResponse<Post>;
type PostsResponse = HttpResponse<Post[]>;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  post(request: IPostRequestBody): Observable<PostResponse> {
    const user_id = 5;
    return this.http.post<Post>(
      `${environment.BASE_URL}` + '/users/' + user_id + '/posts',
      request,
      { observe: 'response' }
    );
  }
  getPostByUser(user_id: string): Observable<PostsResponse> {
    return this.http.get<Post[]>(
      `${environment.BASE_URL}` + '/users/' + user_id + '/posts',
      { observe: 'response' }
    );
  }
  deletePost(user_id: string, post_id: string): Observable<PostResponse> {
    return this.http.delete<Post>(
      `${environment.BASE_URL}` + '/users/' + user_id + '/posts/' + post_id,
      { observe: 'response' }
    );
  }
  editPost(
    user_id: string,
    post_id: string,
    post: Post
  ): Observable<PostResponse> {
    return this.http.put<Post>(
      `${environment.BASE_URL}` + '/users/' + user_id + '/posts/' + post_id,
      post,
      { observe: 'response' }
    );
  }
}
