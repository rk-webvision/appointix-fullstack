import { Component } from '@angular/core';
import { AppointmentService } from '../../../core/services/appointment';
  


@Component({
  selector: 'app-booking-form',
  imports: [],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
formData: any;
  
constructor(private appointmentService: AppointmentService) {}

submit() {
  this.appointmentService.createAppointment(this.formData)
    .subscribe({
      next: (res) => {
        console.log('Saved:', res);
        alert('Appointment Booked!');
      },
      error: (err) => {
        console.error(err);
        alert('Error booking appointment');
      }
    });
}
}
