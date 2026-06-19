package com.example.FullStackProject;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="courses")
@Data
public class Course {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="Course_id")
    private Long id;
    @Column(name="Course_name", nullable=false)
    private String name;
    @ManyToOne
    @JoinColumn(name="student_id", referencedColumnName="Student-id")
    private Student student;
}
