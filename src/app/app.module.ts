import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersService} from "./user/user.service";
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from "./chat/chat.module";
import { RouterModule } from "@angular/router";
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'chat-dialog', component: ChatDialogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChatModule
  ],
  providers: [UsersService, HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
