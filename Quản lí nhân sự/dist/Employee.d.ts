export declare class Employee {
    protected _FirstName: string;
    protected _LastName: string;
    protected _DateOfBirth: string;
    protected _Address: string;
    protected _Position: string;
    constructor(FirstName: string, LastName: string, DateOfBirth: string, Address: string, Position: string);
    get FirstName(): string;
    set FirstName(value: string);
    get LastName(): string;
    set LastName(value: string);
    get DateOfBirth(): string;
    set DateOfBirth(value: string);
    get Address(): string;
    set Address(value: string);
    get Position(): string;
    set Position(value: string);
    getFullName(): string;
}
