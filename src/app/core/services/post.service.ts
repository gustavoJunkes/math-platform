import { lastValueFrom, Observable, take } from 'rxjs';
import { Post } from './../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'https://math-platform.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/post`);
  }

  save(post: Post) {
    return this.httpClient.post<Post>(`${this.baseUrl}/post`, post);
  }

  byId(id: string) {
    return this.httpClient.get<Post>(`${this.baseUrl}/post/byId?id=${id}`);
  }

  async byIdAsync(id: string): Promise<Post> {
    const data = this.httpClient.get<Post>(`${this.baseUrl}/post/byId?id=${id}`).pipe(take(1))
    return await lastValueFrom(data);
  }

}
