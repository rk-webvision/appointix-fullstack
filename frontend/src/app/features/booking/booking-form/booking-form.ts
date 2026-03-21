import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../core/services/appointment';
  


@Component({
  selector: 'app-booking-form',
  imports: [FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
formData = {
    name: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  };
  
constructor(private appointmentService: AppointmentService) {}

submit() {
  this.appointmentService.createAppointment(this.formData)
    .subscribe({
      next: (res) => {
        alert('Appointment Booked!');
      },
      error: (err) => {
        alert('Error booking appointment');
      }
    });
}
}
