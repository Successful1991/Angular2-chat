"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.myUserSubject = new Subject_1.Subject();
    }
    UsersService.prototype.setUsers = function (users) {
        console.log(users);
        this.myUserSubject.next(users);
    };
    UsersService.prototype.sendUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    UsersService.prototype.getDate = function () {
        var date = new Date();
        console.log(date);
    };
    UsersService.prototype.newId = function (max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
