export class Reservation {
carId: string;
dateTimePickup: Date;
dateTimeReturn: Date;
passengers: number;
constructor(carId: string, dateTimePickup: Date, dateTimeReturn: Date, passengers: number) {    
    this.carId = carId;
    this.dateTimePickup = dateTimePickup;
    this.dateTimeReturn = dateTimeReturn;
    this.passengers = passengers;   
}
}
