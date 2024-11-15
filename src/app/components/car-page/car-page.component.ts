import { Component, OnInit, ViewChild } from '@angular/core';
import { Car, CARS } from '../../models/car.model';
import { ReserveComponent } from '../reserve/reserve.component';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})

export class CarPageComponent implements OnInit {
  @ViewChild(ReserveComponent) reserveModal!: ReserveComponent;
  cars: Car[] = CARS;

  constructor() { }

  ngOnInit(): void {

  }

  openReserveModal(car:Car) {
    // Aquí abrimos el modal
    this.reserveModal.openModal();
  }

}
