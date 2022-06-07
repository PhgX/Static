export declare class Room {
    protected _roomPos: number;
    protected _roomType: string;
    protected _roomPrice: number;
    protected _startDate: any;
    protected _endDate: any;
    protected _roomtotal: number;
    constructor(roomPos: number, roomType: string, roomPrice: number, startDate: any, endDate: any, roomtotal?: number);
    get roomPos(): number;
    get roomType(): string;
    get roomPrice(): number;
    set roomPrice(roomPrice: number);
    get startDate(): any;
    set startDate(startDate: any);
    get endDate(): any;
    set endDate(endDate: any);
    numberOfDaysForRent(): number;
}
