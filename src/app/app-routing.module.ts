import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarPageComponent } from './components/car-page/car-page.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarPageComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }