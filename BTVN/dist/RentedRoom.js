"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(roomPos, roomType, roomPrice, startDate, endDate, roomtotal = 20) {
        this._roomPos = roomPos;
        this._roomType = roomType;
        this._roomPrice = roomPrice;
        this._startDate = new Date(startDate);
        this._endDate = new Date(endDate);
        this._roomtotal = roomtotal;
    }
    get roomPos() {
        return this._roomPos;
    }
    get roomType() {
        return this._roomType;
    }
    get roomPrice() {
        return this._roomPrice;
    }
    set roomPrice(roomPrice) {
        this._roomPrice;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = new Date(startDate);
    }
    get endDate() {
        return this._endDate;
    }
    set endDate(endDate) {
        this._endDate = new Date(endDate);
    }
    numberOfDaysForRent() {
        return Math.ceil((this._endDate - this._startDate) / 86400000);
    }
}
exports.Room = Room;
//# sourceMappingURL=RentedRoom.js.map