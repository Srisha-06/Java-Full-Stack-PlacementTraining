package com.example.Hello_FrontBack;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
    @PostMapping("/login")
    public String login(@RequestBody UserLogin login){
        if("srisha".equals(login.getUsername()) && "sri@2006".equals(login.getPassword())){
            return "From Back-end: Login Successfull!";
        }else{
            return "Login Failed!";
        }
    }
    //Inner class for requestbody
    static class UserLogin{
        private String username;
        private String password;
        //Getters and Setters
        public String getUsername(){ return username;}
        public void setUsername(String username){ this.username=username;}
        public String getPassword(){ return password;}
        public void setPassword(String password){ this.password=password;}
    }
}
