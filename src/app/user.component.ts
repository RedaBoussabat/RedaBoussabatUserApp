import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-my-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users: User[];
  thisUser: User;

  // dependency injection
  constructor(private userService: UserService) {
  }

  // Call subscribe() to start listening for updates
  getUsers(): void {
    // polling
    timer(0, 10000)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(data => this.users = data);
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.thisUser = user;
  }

  changeUserInfo(): void {
    this.userService.changeUserInfo(this.thisUser);
  }
}
