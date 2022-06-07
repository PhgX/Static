export declare class Instructor {
    role: string;
    name: string;
    constructor(name: string, role?: string);
    renderDetails(): void;
    static helloWorld(): void;
    static canTeach(instructor: Instructor): boolean;
}
