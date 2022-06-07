"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(FirstName, LastName, DateOfBirth, Address, Position) {
        this._FirstName = FirstName;
        this._LastName = LastName;
        this._DateOfBirth = DateOfBirth;
        this._Address = Address;
        this._Position = Position;
    }
    get FirstName() {
        return this._FirstName;
    }
    set FirstName(value) {
        this._FirstName = value;
    }
    get LastName() {
        return this._LastName;
    }
    set LastName(value) {
        this._LastName = value;
    }
    get DateOfBirth() {
        return this._DateOfBirth;
    }
    set DateOfBirth(value) {
        this._DateOfBirth = value;
    }
    get Address() {
        return this._Address;
    }
    set Address(value) {
        this._Address = value;
    }
    get Position() {
        return this._Position;
    }
    set Position(value) {
        this._Position = value;
    }
    getFullName() {
        let FullName;
        return FullName = this._LastName + " " + this._FirstName;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map