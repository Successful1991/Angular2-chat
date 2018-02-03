import {Component, OnInit } from  "@angular/core" ;
import {UsersService} from "./user.service" ;
import {UserInterface} from './user.interface';
import {AppService} from "../app.service";
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user = '';
  users: UserInterface[];
  private id: number;
  private subscription: Subscription;


  constructor(
    private userService: UsersService,
    private appService: AppService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
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
  }



}
