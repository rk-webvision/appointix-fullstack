package com.appointix.controller;

import com.appointix.entity.Appointment;
import com.appointix.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*") // 🔥 ADD THIS
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Appointment> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        System.out.println(appointment);
        return service.save(appointment);
    }
}