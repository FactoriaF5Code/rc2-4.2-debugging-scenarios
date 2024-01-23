package com.example.scenario4.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HelloController {
    @GetMapping("/saludo")
    public String saludo(@RequestParam String nombre) {
        return "Hola, " + nombre;
    }

    @GetMapping("/despedida")
    public String despedida(@RequestParam String nombre) {
        return "Adiós, " + name;
    }
}
