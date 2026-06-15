package com.example.h2db;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {}

/*
1.JpaRepository<Student, Long>
    JpaRepository is a spring data JPA interface that already has all the common CRUD methods built in.
    *By extending it, your StudentRepository automatically gets methods like:
            save(Student s) -> insert/update a student
            findAll() -> get all students
            findById(Long id) -> get one student
            deleteById(Long id) -> delete a student
    you don't need to write SQL or implement these methods yourself - spring generates them at runtime.

2.<Student, Long>
    The first type parameter(Student) tells JPA which entity this repository manages.
    => It's tied to your Student table.
    The second type parameter(Long) tells JPA the type of the primary key(id).
    => Since your Student entity has private Long id:, you specify Long.

3.public interface StudentRepository
    It's an interface, not a class.
    You don't write any code inside - SpringBoot automatically creates a working implementation at runtime.
 */