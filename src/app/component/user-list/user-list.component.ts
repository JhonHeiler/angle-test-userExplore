import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { UserdetailsService } from 'src/app/services/user-details/userdetails.service';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 10;
  selectedUser: User | null = null;
  userPosts: Post[] = [];
  postComments: Comment[] = [];

  constructor(
    private userService: UserService,
    private userDetailsService: UserdetailsService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterUsers(): void {
    this.currentPage = 1;
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.id.toString().includes(this.searchTerm)
    );
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.userDetailsService.getUserPosts(user.id).subscribe((posts) => {
      this.userPosts = posts;
    });
  }

  loadCommentsForPost(postId: number): void {
    this.commentService.getCommentsForPost(postId).subscribe((comments) => {
      this.postComments = comments;
    });
  }
}
