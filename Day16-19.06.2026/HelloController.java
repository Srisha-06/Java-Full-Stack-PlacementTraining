package com.example.Hello_FrontBack;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class HelloController {
    @GetMapping("/hello")
    public String sayhello(){
        return "Hello, This is a message from SpringBoot-Backend";
    }
}
