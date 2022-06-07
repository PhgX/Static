export class Person {
    protected _name: string;
    protected _ID: string;
    protected _dateOfBirth: string;
    constructor (name: string, ID: string, dateOfBirth: string){
        this._name = name;
        this._ID = ID;
        this._dateOfBirth = dateOfBirth;
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }

    get ID(){
        return this._ID;
    }
    set ID(ID: string){
        this._ID = ID;
    }

    get dateOfBirth(){
        return this._dateOfBirth;
    }
    set dateOfBirth(dateOfBirth: string){
        this._dateOfBirth = dateOfBirth;
    }
}