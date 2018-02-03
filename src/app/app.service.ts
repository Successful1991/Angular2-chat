import {Injectable, OnInit} from '@angular/core';



import { EventEmitter } from '@angular/core';



@Injectable()
export class AppService implements OnInit{
  activeChatUser = new EventEmitter<object>();
  ngOnInit(){
  }

}
