package com.example.SatTest_FB;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/tasks")
public class TaskController {
    private final TaskRepository repo;

    public TaskController(TaskRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return repo.save(task);
    }

    @GetMapping
    public List<Task> getTasks() {
        return repo.findAll();
    }
}
