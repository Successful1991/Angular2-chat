"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var home_page_component_1 = require("./home-page/home-page.component");
var router_1 = require("@angular/router");
var user_service_1 = require("./user/user.service");
var http_1 = require("@angular/common/http");
var chat_module_1 = require("./chat/chat.module");
var chat_dialog_component_1 = require("./chat/chat-dialog/chat-dialog.component");
var routes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'chat-dialog', component: chat_dialog_component_1.ChatDialogComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                home_page_component_1.HomePageComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes),
                forms_1.FormsModule,
                chat_module_1.ChatModule
            ],
            providers: [user_service_1.UsersService, http_1.HttpClientModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
