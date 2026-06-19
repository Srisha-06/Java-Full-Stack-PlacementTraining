package com.example.Multiplication_FrontBack;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MultiController {
    private final MultiService service;
    public MultiController(MultiService service){
        this.service=service;
    }
    @GetMapping("/tables/{n}")
    public String multi(@PathVariable int n){
        return service.multiplication(n);
    }
}
