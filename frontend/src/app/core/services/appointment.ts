import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'https://musical-xylophone-7gvvjrvqx59hwxq9-8080.app.github.dev/api/appointments';

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