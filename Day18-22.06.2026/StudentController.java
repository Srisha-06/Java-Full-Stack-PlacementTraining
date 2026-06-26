package com.example.StudentAndCourse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    private final CourseController course;
    public StudentController(CourseController course){
        this.course=course;
    }

    @GetMapping("/studentandcourse")
    public String getStudentandCourse(){
        String res="Student: Sylvia";
        return course.getCourse(res);
    }
}
