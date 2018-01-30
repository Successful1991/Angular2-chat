import {Component, OnInit} from  "@angular/core" ;
import {UsersService} from "./user.service" ;
import {UserInterface} from './user.interface' ;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})

export class UserComponent implements OnInit {
  users: UserInterface[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.myUserSubject.subscribe(users => {
      this.users = users;
    });
    this.userService.sendUsers().subscribe(response => {
      this.userService.setUsers(response);
    });

  }


}
