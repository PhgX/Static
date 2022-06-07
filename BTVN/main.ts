import { Room } from "./RentedRoom";
import { Person } from "./Person";
import { HotelManager } from "./hotelManager";

let khach1 = new Person ('Lê Văn Vĩnh', '002003123556', '12/5/1994')
let khach2 = new Person ('Trần Đức Độ', '002003556556', '13/5/1994')
let khach3 = new Person ('Lê Hoàng Minh', '002003144456', '18/5/1994')


let room1 = new Room (202, 'Normal', 500000 , 'April 07, 2020 12:00:00', 'April 08, 2020 12:00:00')
let room2 = new Room (302, 'VIP', 1000000 , 'April 9, 2020 12:00:00', 'April 12, 2020 12:00:00')
let room3 = new Room (402, 'SUPERVIP', 2000000 , 'April 9, 2020 12:00:00', 'April 15, 2020 12:00:00')

let hotelManager = new HotelManager();
hotelManager.clientRoom

hotelManager.Clients.push(khach1,khach2,khach3);
hotelManager.roomRented.push(room1,room2,room3);

// console.log(hotelManager.roomRented)
// console.log(`------------------`)
// console.log(hotelManager.Clients)

console.log(hotelManager.roomRented[0].endDate)
console.log(hotelManager.roomRented[0].startDate)
console.log(hotelManager.roomRental(202))
console.log(hotelManager.roomRental(302))
console.log(hotelManager.roomRental(402))


