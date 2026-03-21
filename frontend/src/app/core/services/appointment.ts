import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  // private apiUrl = '/api/appointments';
  private apiUrl = `${environment.apiUrl}/api/appointments`;

  constructor(private http: HttpClient) {}

  // ✅ POST (already used in booking form)
  createAppointment(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // 🔥 ADD THIS (GET API)
  getAppointments() {
    return this.http.get(this.apiUrl);
  }
}