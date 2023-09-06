import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { UserListComponent } from './component/user-list/user-list.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { AlbumDialogComponent } from './component/album-dialog/album-dialog.component';

@NgModule({
  declarations: [
    AppComponent, UserListComponent, TopBarComponent, AlbumListComponent, AlbumDialogComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
