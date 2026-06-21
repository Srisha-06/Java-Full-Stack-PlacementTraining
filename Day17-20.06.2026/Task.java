package com.example.SatTest_FB;

import jakarta.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String task;
    private String name;
    private String due;

    public Long getId() { return id; }

    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDue() { return due; }
    public void setDue(String due) { this.due = due; }
}
