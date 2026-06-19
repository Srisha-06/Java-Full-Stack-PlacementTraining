package com.example.FullStackProject;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="students")
@Data //Lombok generates getters/setters, toString, equals, hashCode
public class Student {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="Student-id")
    private Long stu_id;
    @Column(name="Student_name", nullable=false, length=10)
    private String stu_name;
    @Column(name="Department")
    private String dept;
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="profile_id", referencedColumnName="id")
    private Profile profile;
    @OneToMany(mappedBy="student",cascade=CascadeType.ALL)
    private List<Course> courses;
}
