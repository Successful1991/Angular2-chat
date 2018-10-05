import {Injectable, Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/scan';
import {UserInterface} from '../../user/user.interface';
import {Router, NavigationStart, Event, ActivatedRoute} from '@angular/router';
import {AppComponent} from "../../app.component";

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

  public buttonClear:boolean = false;

  user: UserInterface;
  date;
  messages: Observable<Message[]>;
  savedMessages: Message[];
  formValue: string;

  constructor(public chat: ChatService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private appComponent: AppComponent) {}

  private messageSubscribe() {
    const messages = localStorage.getItem( this.user.id );
    if (messages && messages !== 'undefined') {
      this.chat.fillConversation(JSON.parse(messages));
    }
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => {
        this.savedMessages = [...acc.concat(val)];
        return acc.concat(val);
    });
  }

  ngOnInit() {
    this.userSubscription = this.appComponent.myUserSubject.subscribe((users) => {
      this.routerUserSubscription = this.activatedRoute.params.subscribe((params) => {
        users.forEach(user => {
          if (+user.id === +params.id) {
            this.user = user;
          }
        });
        this.messageSubscribe();
      });
    });
    this.appComponent.receiveUsers();

    this.routerEventsSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (this.savedMessages && this.savedMessages.length > 0) {
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
    if (this.formValue) {
      this.chat.converse(this.formValue);
      this.formValue = '';
      this.date = new Date;
    }
  }

  clearMessageUser(userId){
    localStorage.removeItem(userId);
    this.chat.clearConversation();
    this.messageSubscribe();
    this.buttonClear = !this.buttonClear;
  }

  @ViewChild('myInputText') inputText;
  autosize() {
    let textArea = this.inputText.nativeElement;
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
    }




}
