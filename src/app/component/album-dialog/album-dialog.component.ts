import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.css']
})
export class AlbumDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Album) { }
}
