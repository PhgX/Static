import { User } from "./User";

let person1 = new User ('Lê Văn Một', 'mot@gmail.com', 1);
let person2 = new User ('Lê Văn Hai', 'hai@gmail.com', 2);



console.log(person1.getInfo())
console.log(person2.getInfo())
console.log(person1.isAdmin())
console.log(person2.isAdmin())

person1.name = 'Trần Thị Trinh'
person1.email = 'TrinhTran@gmail.com'

console.log(person1.getInfo())