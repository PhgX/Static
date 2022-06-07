"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.role = void 0;
var role;
(function (role) {
    role[role["Admin"] = 1] = "Admin";
    role[role["User"] = 2] = "User";
})(role = exports.role || (exports.role = {}));
class User {
    constructor(name, email, role) {
        this._email = email;
        this._name = name;
        this._role = role;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set role(role) {
        this._role = role;
    }
    get role() {
        return this._role;
    }
    getInfo() {
        return (`Họ và tên: ${this.name}, Email: ${this.email}`);
    }
    isAdmin() {
        if (this.role === 1) {
            return `admin`;
        }
        else {
            return `user`;
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map