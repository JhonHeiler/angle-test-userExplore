import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/photos";

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }
}
