import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'userList' },
  { path: 'userList', component: UserListComponent },
  { path: 'albumList', component: AlbumListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
