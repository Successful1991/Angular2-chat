import {Routes, RouterModule} from "@angular/router";
import {ChatDialogComponent} from "./chat/chat-dialog/chat-dialog.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'chat-dialog/:id' , component: ChatDialogComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);
