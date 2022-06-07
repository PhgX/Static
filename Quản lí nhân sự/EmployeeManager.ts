import { Employee } from "./Employee";

export class EmployeeManager {
    static employees : Employee [] = [];
    constructor(){}  

    addList(...employee : Employee[]): void{
        EmployeeManager.employees.push(...employee)
    }

    getList() {
        return EmployeeManager.employees;
    }

    findEmployee(FullName: string){
        let i = -1;
       for(let person of EmployeeManager.employees){
           if(person.getFullName() === FullName){
               i = EmployeeManager.employees.indexOf(person)
           }
       }
       return i;
    }

    deleteEmployee(FullName: string){
        let deleteEmployeeIndex = this.findEmployee(FullName);
        if(deleteEmployeeIndex != -1){
            EmployeeManager.employees.splice(deleteEmployeeIndex, 1);
        } else {
            throw new Error (`Nhân viên không tồn tại`)
        }
    }

    updateName(FullName: string, FirstName: string, LastName: string){
        let updateNameIndex = this.findEmployee(FullName);
        if(updateNameIndex != -1){
            EmployeeManager.employees[updateNameIndex].FirstName = FirstName;
            EmployeeManager.employees[updateNameIndex].LastName = LastName;
        } else {
            throw new Error (`Nhập sai tên nhân viên`)
        }
    }
    
    updateAddress(FullName: string, Address: string){
        let updateNameAddress = this.findEmployee(FullName);
        if(updateNameAddress != -1){
            EmployeeManager.employees[updateNameAddress].Address = Address;           
        } else {
            throw new Error (`Nhập sai tên nhân viên`)
        }
    }

    updateDateOfBirth(FullName: string, DateOfBirth: string){
        let updateDateOfBirthIndex = this.findEmployee(FullName);
        if(updateDateOfBirthIndex != -1){
            EmployeeManager.employees[updateDateOfBirthIndex].DateOfBirth = DateOfBirth;
        } else {
            throw new Error (`Nhập sai tên nhân viên`)
        }
    }
}