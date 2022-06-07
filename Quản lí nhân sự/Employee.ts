export class Employee {
    protected _FirstName: string;
    protected _LastName: string;
    protected _DateOfBirth: string;
    protected _Address: string;
    protected _Position: string;
    constructor (FirstName: string, LastName: string, DateOfBirth: string, Address: string, Position: string) {
        this._FirstName = FirstName;
        this._LastName = LastName;
        this._DateOfBirth = DateOfBirth;
        this._Address = Address;
        this._Position = Position;
    }
    get FirstName(): string {
        return this._FirstName;
    }
    set FirstName(value: string) {
        this._FirstName = value;
    }
    get LastName(): string {
        return this._LastName;
    }
    set LastName(value: string) {
        this._LastName = value;
    }
    get DateOfBirth(): string {
        return this._DateOfBirth;
    }
    set DateOfBirth(value: string) {
        this._DateOfBirth = value;
    }
    get Address(): string {
        return this._Address;
    }
    set Address(value: string) {
        this._Address = value;
    }
    get Position(): string {
        return this._Position;
    }
    set Position(value: string) {
        this._Position = value;
    }
    getFullName(){
        let FullName: string;
        return FullName = this._LastName + " " + this._FirstName;
    }
}