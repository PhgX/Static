export declare enum role {
    Admin = 1,
    User = 2
}
export declare class User {
    protected _name: string;
    protected _email: string;
    _role: role;
    constructor(name: string, email: string, role: role);
    set name(name: string);
    get name(): string;
    set email(email: string);
    get email(): string;
    set role(role: role);
    get role(): role;
    getInfo(): string;
    isAdmin(): "user" | "admin";
}
