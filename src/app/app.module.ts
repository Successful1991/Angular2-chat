import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { RouterModule } from "@angular/router";
import { UsersService} from "./user/user.service";
import { HttpClientModule } from '@angular/common/http';


const routes = [
  {path: '', component: HomePageComponent},
  {path: 'chat', component: ChatPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomePageComponent,
    ChatPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService, HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
