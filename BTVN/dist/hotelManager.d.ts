import { Person } from "./Person";
import { Room } from "./RentedRoom";
export declare class HotelManager {
    Clients: Person[];
    roomRented: Room[];
    constructor();
    addClient(...person: Person[]): void;
    getListClient(): Person[];
    addRoomRented(...roomRented: Room[]): void;
    getListRoomRented(): Room[];
    findRentedRoomIndex(roomPos: number): number;
    roomRental(roomPos: number): number;
}
