import {Component, OnInit} from '@angular/core';
import {UsersService} from './user/user.service';
import {UserInterface} from './user/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: UserInterface[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    // this.usersService.myUserSubject.subscribe((users) => {
    //     this.users = users;
    //   }
    // );
    this.usersService.sendUsers().subscribe(response => {
      this.users = response;
      this.usersService.setUsers(response);
    });
  }

}
