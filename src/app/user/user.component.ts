import {Component, OnInit } from  "@angular/core" ;
import {UsersService} from "./user.service" ;
import {UserInterface} from './user.interface';
import {AppService} from "../app.service";
import {Router, NavigationStart,NavigationEnd,NavigationError,Event} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user;
  users: UserInterface[];

  constructor(
    private userService: UsersService,
    private appService: AppService,
    private router: Router
  ) {
    this.router.events.subscribe( (event:Event) => {
      if(event instanceof NavigationStart){
        console.log(this.user);
      }
      if(event instanceof NavigationEnd){
      }
      if(event instanceof NavigationError){
      }
    });
  }

  ngOnInit():void {
    this.userService.myUserSubject.subscribe(users => {
      this.users = users;
    });

    this.userService.sendUsers().subscribe(response => {
      this.userService.setUsers(response);
    });

  }
  userName(user){
    this.appService.activeChatUser.emit(user);
    this.user = user;
    this.router.navigate(['chat-dialog', user.id]);
  }


}
