import {Component} from '@angular/core';
import { UsersService } from "../user/user.service";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent{


  constructor(private userService: UsersService) {}

  users;

  ngOnInit(){
    this.userService.myUserSubject.subscribe(users =>{
      this.users = users;
    });
    this.userService.sendUsers();
  }


  // chat = [
  //   {
  //     id: 64,
  //     id_user1 : '234',
  //     id_user2 : '534',
  //     message:[
  //       {
  //         id: '64_1',
  //         id_user: '234',
  //         data: '13.12.2017 14:24',
  //         text: ""
  //       }
  //     ]
  //   }
  //
  // ]

}
