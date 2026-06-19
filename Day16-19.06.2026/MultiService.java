package com.example.Multiplication_FrontBack;

import org.springframework.stereotype.Service;


@Service
public class MultiService {
    public String multiplication(int n){
        StringBuilder sb=new StringBuilder();
        for(int i=1;i<=10;i++){
            sb.append(i+"*"+n+"="+(i*n)).append("\n");
        }
        return sb.toString();
    }

}
