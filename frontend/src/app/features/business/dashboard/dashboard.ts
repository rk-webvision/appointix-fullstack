import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../core/services/appointment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {

  appointments: any[] = [];

  constructor(private service: AppointmentService) {}

  ngOnInit() {
    this.service.getAppointments().subscribe({
      next: (data: any) => {
        console.log('API Data:', data); // 🔥 debug
        this.appointments = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}