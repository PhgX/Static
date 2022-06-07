"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
let person1 = new User_1.User('Lê Văn Một', 'mot@gmail.com', 1);
let person2 = new User_1.User('Lê Văn Hai', 'hai@gmail.com', 2);
console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person1.isAdmin());
console.log(person2.isAdmin());
person1.name = 'Trần Thị Trinh';
person1.email = 'TrinhTran@gmail.com';
console.log(person1.getInfo());
//# sourceMappingURL=main.js.map