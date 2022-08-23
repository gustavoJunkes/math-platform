import { Observable } from 'rxjs';
import { Post } from './../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/post`);
  }

  save(post: Post) {
    return this.httpClient.post<Post>(`${this.baseUrl}/post`, post);
  }

  byId(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.baseUrl}/post/byId?id=${id}`)
  }
}
