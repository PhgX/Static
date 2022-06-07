export declare class Person {
    protected _name: string;
    protected _ID: string;
    protected _dateOfBirth: string;
    constructor(name: string, ID: string, dateOfBirth: string);
    get name(): string;
    set name(name: string);
    get ID(): string;
    set ID(ID: string);
    get dateOfBirth(): string;
    set dateOfBirth(dateOfBirth: string);
}
