"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
class HotelManager {
    constructor() {
        this.Clients = [];
        this.roomRented = [];
    }
    addClient(...person) {
        this.Clients.push(...person);
    }
    getListClient() {
        return this.Clients;
    }
    addRoomRented(...roomRented) {
        this.roomRented.push(...roomRented);
    }
    getListRoomRented() {
        return this.roomRented;
    }
    findRentedRoomIndex(roomPos) {
        let i = -1;
        for (let room of this.roomRented) {
            if (room.roomPos === roomPos) {
                i = this.roomRented.indexOf(room);
            }
        }
        return i;
    }
    roomRental(roomPos) {
        let x;
        let roomRentalIndex = this.findRentedRoomIndex(roomPos);
        if (roomRentalIndex !== -1) {
            let roomDay = this.roomRented[roomRentalIndex].numberOfDaysForRent();
            let roomPrice = this.roomRented[roomRentalIndex].roomPrice;
            console.log(roomDay);
            console.log(roomPrice);
            return x = roomDay * roomPrice;
        }
        else {
            throw new Error(`room ko ton tai`);
        }
    }
}
exports.HotelManager = HotelManager;
//# sourceMappingURL=hotelManager.js.map