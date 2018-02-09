import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {AppService} from "../app.service";



// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string ) {}
}
@Injectable()

export class ChatService{

  public userName = new Subject<object>();
  user: object = {username:''};

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private appService: AppService) {}



  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }


  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }


  setUserName(){
    this.appService.activeChatUser.subscribe( user => {
      this.user = user;
      console.log(user);
      this.userName.next(this.user );
    });
  }




}
