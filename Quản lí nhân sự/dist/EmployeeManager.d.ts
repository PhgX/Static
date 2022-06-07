import { Employee } from "./Employee";
export declare class EmployeeManager {
    static employees: Employee[];
    constructor();
    addList(...employee: Employee[]): void;
    getList(): Employee[];
    findEmployee(FullName: any): number;
    deleteEmployee(FullName: string): void;
    updateName(FullName: string, FirstName: string, LastName: string): void;
}
