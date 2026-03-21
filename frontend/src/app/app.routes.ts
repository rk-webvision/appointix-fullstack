import { Routes } from '@angular/router';
import { BookingForm } from './features/booking/booking-form/booking-form';
import { Dashboard } from './features/business/dashboard/dashboard';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', component: BookingForm },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard }
];