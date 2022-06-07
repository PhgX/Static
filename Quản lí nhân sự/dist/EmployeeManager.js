"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
class EmployeeManager {
    constructor() { }
    addList(...employee) {
        EmployeeManager.employees.push(...employee);
    }
    getList() {
        return EmployeeManager.employees;
    }
    findEmployee(FullName) {
        let i = -1;
        for (let person of EmployeeManager.employees) {
            if (person.getFullName() == FullName) {
                i = EmployeeManager.employees.indexOf(person);
            }
        }
        return i;
    }
    deleteEmployee(FullName) {
        let deleteEmployeeIndex = this.findEmployee(FullName);
        if (deleteEmployeeIndex != -1) {
            EmployeeManager.employees.splice(deleteEmployeeIndex, 1);
        }
        else {
            throw new Error(`Nhân viên không tồn tại`);
        }
    }
    updateName(FullName, FirstName, LastName) {
        let updateNameIndex = this.findEmployee(FullName);
        if (updateNameIndex != -1) {
            EmployeeManager.employees[updateNameIndex].FirstName = FirstName;
            EmployeeManager.employees[updateNameIndex].LastName = LastName;
        }
        else {
            throw new Error(`Nhập sai tên nhân viên`);
        }
    }
}
exports.EmployeeManager = EmployeeManager;
EmployeeManager.employees = [];
//# sourceMappingURL=EmployeeManager.js.map