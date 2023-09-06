import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album } from 'src/app/models/album.model';
import { AlbumService } from 'src/app/services/album/album.service';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
  albums: Album[] = [];

  constructor(private albumService: AlbumService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  openAlbumDialog(album: Album): void {
    this.dialog.open(AlbumDialogComponent, {
      data: album
    });
  }
}
