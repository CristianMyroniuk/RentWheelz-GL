import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {
  
  @Input() car!: Car;
  @Output() reserveClicked = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
   
  }

  reserveCar() {
    this.reserveClicked.emit();
    localStorage.setItem('reservedCarId', this.car.carId.toString());
  }
}