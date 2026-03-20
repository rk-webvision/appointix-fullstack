package com.appointix.controller;

import com.appointix.dto.LoginRequest;
import com.appointix.dto.RegisterRequest;
import com.appointix.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        System.out.println("LOGIN API HIT 🔥");
        return authService.login(request);
    }
}