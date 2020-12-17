"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserComponent = /** @class */ (function () {
  // dependency injection
  function UserComponent(userService) {
    this.userService = userService;
  }
  UserComponent.prototype.getUsers = function () {
    var _this = this;
    rxjs_1.timer(0, 20000).subscribe(function () {
      _this.userService.getUsers().subscribe(function (data) { return _this.users = data; });
    });
  };
  UserComponent.prototype.ngOnInit = function () {
    this.getUsers();
  };
  UserComponent = __decorate([
    core_1.Component({
      selector: 'app-my-user',
      templateUrl: './user.component.html'
    })
  ], UserComponent);
  return UserComponent;
}());
exports.UserComponent = UserComponent;
