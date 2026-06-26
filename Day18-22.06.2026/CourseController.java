package com.example.StudentAndCourse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class CourseController {

    @GetMapping
    public String getCourse(String res){
        String c="Course number: 101";
        return res+" enrolled in "+c;
    }
}
