import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'chat', component: ChatDialogComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ ChatDialogComponent ],
  providers: [ChatService]
})
export class ChatModule { }
