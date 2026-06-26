package com.example.E_Commerce;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductRepository repo;

    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return repo.findAll();
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return repo.save(product);
    }
}
