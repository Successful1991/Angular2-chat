import { Component, OnInit} from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { NgIf } from '@angular/common';

import { Injectable } from '@angular/core';
import {AppService} from "../../app.service";

@Injectable()

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  user: object = {username:''};
  date;
  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService,
              private appService: AppService) { }


  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val) );

    this.appService.activeChatUser.subscribe( user => {
      this.user = user;
    });
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
    this.date = new Date;
  }
}
