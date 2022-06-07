"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const EmployeeManager_1 = require("./EmployeeManager");
let employeeManager = new EmployeeManager_1.EmployeeManager();
let nhanvien1 = new Employee_1.Employee('Hương', 'Phạm Thị', '26/02/1992', '162/10/Thành Công', 'Kiểm toán viên');
let nhanvien2 = new Employee_1.Employee('Phương', 'Trần Thanh', '19/9/2009', '16/6/Việt Trì', 'Quản trị viên');
let nhanvien3 = new Employee_1.Employee('Nam', 'Đặng Thành', '10/5/1998', '16/12/Trần Hưng Đạo', 'Phó Giám Đốc');
employeeManager.addList(nhanvien1, nhanvien2, nhanvien3);
console.log(employeeManager.getList());
console.log(nhanvien1.getFullName());
console.log(employeeManager.findEmployee('Phạm Thị Hương'));
employeeManager.deleteEmployee('Trần Thanh Phương');
employeeManager.updateName('Đặng Thành Nam', 'Minh', 'Phạm Tiến');
console.log(employeeManager.getList());
//# sourceMappingURL=main.js.map