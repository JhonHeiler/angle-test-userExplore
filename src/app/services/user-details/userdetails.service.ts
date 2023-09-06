import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Post } from 'src/app/models/post.model';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/users/";
  private apiUrlPosts = "https://jsonplaceholder.typicode.com/posts?userId=";

  getUserDetails(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${userId}`);
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrlPosts}${userId}`);
  }
}
