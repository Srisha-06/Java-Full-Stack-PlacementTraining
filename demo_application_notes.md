package com.example.demo;



import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication

public class DemoApplication {



&#x09;public static void main(String\[] args) {

&#x09;	SpringApplication.run(DemoApplication.class, args);

&#x09;}



}





CODE EXPLANATION:



package com.example.demo;

&#x20;  ---This line says my java class is live inside a package(folder) called com.example.demo

packages help to organize code and avoid nameclashes



SpringApplication;

&#x20;  ---This is the helper that starts your application



SpringBootApplication;

&#x20;  ---Brings springboot classes you need



@SpringBootApplication

&#x20;  ---This annotation is responsible for autoconfiguration of everything



main

&#x20;  ---This ignites key that starts your backend server



**NOTE:** spring initializr giving us a default java app called Demoapplication.java, though it looks like a normal java program when we run it springboot wakes up, starts a web server and waits for our endpoints

