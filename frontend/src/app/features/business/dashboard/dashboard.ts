import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../core/services/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {

  appointments: any[] = [];

  constructor(private service: AppointmentService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.service.getAppointments().subscribe({
      next: (data: any) => {
        this.appointments = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  goToBooking() {
    this.router.navigate(['/booking']);
  }
}