import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { Car, CARS } from 'src/app/models/car.model';
import { Reservation } from 'src/app/models/reservation.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  reservations!: Reservation[];
  cars: Car[] = CARS;
  carsToShow: Car[] = [];
  booking:Booking[] = [];

  tabs: string[] = ['All', 'Confirmed', 'Completed', 'Cancelled'];
    selectedTab: string = 'All';

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.reservations = JSON.parse(localStorage.getItem('bookings') || '{}');

    this.reservations.forEach(reservation => {
      const car = this.cars.find(car => car.carId === reservation.carId as string);
      if (car) {
      const currentDate = new Date();
      const returnDate = new Date(reservation.dateTimeReturn);
      const pickUpDate = new Date(reservation.dateTimePickup);

      var status = "";

      if (currentDate > pickUpDate) {
        status = 'CONFIRMED';
      } 
      if(returnDate > currentDate){
        status = 'COMPLETED';
      }
      this.booking.push({ car, reservation, status });
      }
    });
  }

  filterCars(filtro:string):void{
  }

  cancelBooking(booking: Booking): void {}

  selectTab(tab: string) {
    this.selectedTab = tab;
}

}
