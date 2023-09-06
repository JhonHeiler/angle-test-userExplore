import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  getCommentsForPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}${postId}/comments`);
  }
}
