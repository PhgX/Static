export enum role {Admin = 1, User}

export class User {
    protected _name: string;
    protected _email: string;
    public _role: role;
    constructor (name: string, email: string, role: role){
        this._email = email;
        this._name = name;
        this._role = role;
    }
    set name(name: string){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    
    set email(email: string){
        this._email = email;
    }
    get email(){
        return this._email;
    }
    set role(role: role){
        this._role = role;
    }
    get role(){
        return this._role;
    }

    getInfo(){
        return (`Họ và tên: ${this.name}, Email: ${this.email}`)
    }

    isAdmin(){
        if(this.role === 1){
            return `admin`
        } else {
            return `user`
        }
    }
}