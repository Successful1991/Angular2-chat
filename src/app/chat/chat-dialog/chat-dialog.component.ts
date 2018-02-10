import {Injectable, Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/scan';
import {UserInterface} from '../../user/user.interface'
import {UsersService} from '../../user/user.service'
import {Router, NavigationStart, Event, ActivatedRoute} from '@angular/router';


@Injectable()

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit, OnDestroy {

  private routerUserSubscription: Subscription;
  private routerEventsSubscription: Subscription;
  private userSubscription: Subscription;

  user: UserInterface;
  date;
  messages: Observable<Message[]>;
  savedMessages: Message[];
  formValue: string;

  constructor(public chat: ChatService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private usersService: UsersService) {
  }


  private messageSubscribe() {
    const messages = localStorage.getItem( this.user.id );
    if( messages && messages !== 'undefined' ){
      this.chat.fillConversation(JSON.parse(messages));
    }

    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => {
        this.savedMessages = [...acc.concat(val)];
        return acc.concat(val);
      });
  }

  ngOnInit() {
    this.userSubscription = this.usersService.myUserSubject.subscribe((users) => {
      this.routerUserSubscription = this.activatedRoute.params.subscribe((params) => {
        users.forEach(user => {
          if (user.id == params.id) {
            this.user = user;
          }
        });
        this.messageSubscribe()
      });
    });

    this.routerEventsSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if(this.savedMessages && this.savedMessages.length > 0) {
          localStorage.setItem( this.user.id , JSON.stringify(this.savedMessages));
        }
        this.savedMessages = [];
        this.chat.clearConversation();
      }
    });


  }


  ngOnDestroy() {
    this.routerUserSubscription.unsubscribe();
    this.routerEventsSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  sendMessage() {
    if(this.formValue) {
      this.chat.converse(this.formValue);
      this.formValue = '';
      this.date = new Date;
    }
  }



}
