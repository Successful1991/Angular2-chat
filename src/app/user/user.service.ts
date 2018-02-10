import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { UserInterface } from './user.interface';


@Injectable()

export class UsersService {

  constructor(private http: HttpClient) {}

  private users: UserInterface[];
  public myUserSubject = new Subject<UserInterface[]>();

  setUsers(users: UserInterface[]){
    this.myUserSubject.next(users);
    this.users = users;

  }

  sendUsers(){
   return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
  }

}

