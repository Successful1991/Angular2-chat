"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var chat_service_1 = require("./chat.service");
var forms_1 = require("@angular/forms");
var chat_dialog_component_1 = require("./chat-dialog/chat-dialog.component");
var home_page_component_1 = require("../home-page/home-page.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'chat', component: chat_dialog_component_1.ChatDialogComponent }
];
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule_1 = ChatModule;
    ChatModule = ChatModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes),
                ChatModule_1,
                forms_1.FormsModule
            ],
            declarations: [chat_dialog_component_1.ChatDialogComponent],
            exports: [chat_dialog_component_1.ChatDialogComponent],
            providers: [chat_service_1.ChatService]
        })
    ], ChatModule);
    return ChatModule;
    var ChatModule_1;
}());
exports.ChatModule = ChatModule;
