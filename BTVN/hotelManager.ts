import { Person } from "./Person";
import { Room } from "./RentedRoom";

export class HotelManager {
  Clients: Person[] = [];
  roomRented: Room[] = [];
  clientRoom: {} = {}
  constructor() {}

  addClient(...person: Person[]): void {
    this.Clients.push(...person);
  }

  getListClient() {
    return this.Clients;
  }

  addRoomRented(...roomRented: Room[]): void {
    this.roomRented.push(...roomRented);
  }

  getListRoomRented() {
    return this.roomRented;
  }

  findRentedRoomIndex(roomPos: number) {
    let i = -1;
    for (let room of this.roomRented) {
      if (room.roomPos === roomPos) {
        i = this.roomRented.indexOf(room);
      }
    }
    return i;
  }

  roomRental(roomPos: number) {
    let x: number;
    let roomRentalIndex = this.findRentedRoomIndex(roomPos);
    if (roomRentalIndex !== -1) {
      let roomDay = this.roomRented[roomRentalIndex].numberOfDaysForRent();
      let roomPrice = this.roomRented[roomRentalIndex].roomPrice;
      console.log(roomDay);
      console.log(roomPrice);
      return (x = roomDay * roomPrice);
    } else {
      throw new Error(`room ko ton tai`);
    }
  }


}
