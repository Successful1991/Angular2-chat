import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from "./chat/chat.module";
import { AppService } from "./app.service";
import { AppRoutes } from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule,
    AppRoutes,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, AppService],
  bootstrap: [AppComponent]
})

export class AppModule {}


