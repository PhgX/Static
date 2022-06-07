"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, ID, dateOfBirth) {
        this._name = name;
        this._ID = ID;
        this._dateOfBirth = dateOfBirth;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get ID() {
        return this._ID;
    }
    set ID(ID) {
        this._ID = ID;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map