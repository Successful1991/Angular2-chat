import {Component, OnInit} from '@angular/core';
import {UserInterface} from './user/user.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: UserInterface[];
  public myUserSubject = new Subject<UserInterface[]>();
  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.receiveUsers();

  }

  receiveUsers(){
    this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users').subscribe(users=>{
      this.users = users;
      this.myUserSubject.next(this.users);
    });
  }


}
