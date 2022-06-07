export class Room {
    protected _roomPos : number;
    protected _roomType: string;
    protected _roomPrice: number;
    protected _startDate: any;
    protected _endDate: any;
    protected _roomtotal: number;
    constructor (roomPos: number, roomType: string, roomPrice: number, startDate: any, endDate: any, roomtotal: number = 20){
       this._roomPos = roomPos;
       this._roomType = roomType;
       this._roomPrice = roomPrice; 
       this._startDate = new Date(startDate);
       this._endDate = new Date(endDate);
       this._roomtotal = roomtotal;
    }   
    get roomPos(){
        return this._roomPos;
    }
    get roomType(){
        return this._roomType;
    }
    get roomPrice(){
        return this._roomPrice;
    }
    set roomPrice(roomPrice : number){
        this._roomPrice ;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate: any){
        this._startDate = new Date(startDate);
    }
    get endDate(){
        return this._endDate;    
    }
    set endDate(endDate: any){
        this._endDate = new Date(endDate);
    }    

    numberOfDaysForRent(): number{        
        return Math.ceil((this._endDate - this._startDate)/86400000)
    }
}