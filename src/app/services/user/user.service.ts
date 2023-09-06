import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  private apiUrl ="https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

}
