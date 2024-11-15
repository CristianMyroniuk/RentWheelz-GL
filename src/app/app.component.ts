import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentWheelz';

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToBookings(){
    this.router.navigate(['/bookings']);
  }

  redirectToHome(){
    const user = localStorage.getItem('user');
    if (user) {
    this.router.navigate(['/cars']);
    } else {
      this.router.navigate(['/register']);
    }
  }


  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const loginButton = document.getElementById('loginButton');
      const bookingsButton = document.getElementById('bookingsButton');
      if (loginButton) {
        loginButton.style.display = 'none';
      }
      if(bookingsButton){
        bookingsButton.style.display = 'block';
        bookingsButton.style.visibility = 'visible';
      }
    }
  }

}
