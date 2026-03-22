import { Routes } from '@angular/router';
import { BookingForm } from './features/booking/booking-form/booking-form';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  { path: 'booking', component: BookingForm },
  { path: 'login', component: Login },
  {
  path: '',
  loadComponent: () =>
    import('./features/business/dashboard/dashboard')
      .then(m => m.Dashboard)
}
];