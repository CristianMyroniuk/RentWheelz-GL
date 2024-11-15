import { Car } from "./car.model"
import { Reservation } from "./reservation.model"

export class Booking {
    public car: Car;
    public reservation: Reservation;
    public status: string;

    constructor(car: Car, reservation: Reservation, status: string) {
        this.car = car
        this.reservation = reservation
        this.status = status
    }
}
