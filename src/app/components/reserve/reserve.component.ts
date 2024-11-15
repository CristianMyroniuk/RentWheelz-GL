import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  @Input() car!: Car;
  reserveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reserveForm = this.formBuilder.group({
      dateTimePickup: ['', Validators.required],
      dateTimeReturn: ['', Validators.required],
      passenger: ['', [Validators.required, Validators.min(1)]]
    });
  }

  openModal() {
    const modalElement = document.getElementById('reserveModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  onReserve(): void {
    if (this.reserveForm.valid) {
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const reservedCarId = localStorage.getItem('reservedCarId');
      const reservation = {
        carId: reservedCarId,
        dateTimePickup: this.reserveForm.value.dateTimePickup,
        dateTimeReturn: this.reserveForm.value.dateTimeReturn,
        passenger: this.reserveForm.value.passenger
      };
      bookings.push(reservation);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      const modalElement = document.getElementById('reserveModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }

    } else {
      this.reserveForm.markAllAsTouched();
    }
  }
}