package com.example.frontend_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class CalcController {
    @GetMapping("calc/add/{num1}/{num2}")
    public Map<String,Object> add(@PathVariable int num1, @PathVariable int num2){
        return Map.of("operation","addition","result",num1+num2);
    }
//    public String add(@PathVariable int num1, @PathVariable int num2){
//        return "Addition: "+(num1+num2);
//    }
    @GetMapping("calc/sub/{num1}/{num2}")
    public String subtract(@PathVariable int num1, @PathVariable int num2){
        return "Subtraction: "+(num1-num2);
    }
    @GetMapping("calc/mul/{num1}/{num2}")
    public String multiply(@PathVariable int num1, @PathVariable int num2){
        return "Multiplication: "+(num1*num2);
    }
    @GetMapping("calc/div/{num1}/{num2}")
    public String divide(@PathVariable int num1, @PathVariable int num2){
        if(num2!=0)
            return "Division: "+String.format("%.2f",((double)num1/num2));
        else
            return "Zero division error: cannot divisible by zero";
    }
    @GetMapping("calc/mod/{num1}/{num2}")
    public String modulo(@PathVariable int num1, @PathVariable int num2){
        if(num2!=0)
            return "Modulo: "+(num1%num2);
        else
            return "Zero division error: cannot do modulo operation";
    }
    @GetMapping("calc/sin/{num1}")
    public String sin(@PathVariable double num1){
        return "Sin: "+String.format("%.2f",(Math.sin(Math.toRadians(num1))));
    }
    @GetMapping("calc/cos/{num1}")
    public String cos(@PathVariable double num1){
        return "Cos: "+String.format("%.2f",(Math.cos(Math.toRadians(num1))));
    }
    @GetMapping("calc/tan/{num1}")
    public String tan(@PathVariable double num1){
        return "Tan: "+String.format("%.2f",(Math.tan(Math.toRadians(num1))));
    }
    @GetMapping("calc/log/{num1}")
    public String log(@PathVariable double num1){
        return "Log: "+String.format("%.2f",(Math.log(num1)));
    }
    @GetMapping("calc/exp/{num1}")
    public String exp(@PathVariable double num1){
        return "Exp: "+String.format("%.2f",(Math.exp(num1)));
    }
    @GetMapping("calc/spiral")
    public List<Integer> spiral(){
        int n=4;
        int[][] arr={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
        List<Integer> list=new ArrayList<>();
        int top = 0;
        int bottom = n - 1;
        int left = 0;
        int right = n - 1;
        while(top <= bottom && left <= right) {
            for(int i = left; i <= right; i++) {
                list.add(arr[top][i]);
            }
            top++;
            for(int i = top; i <= bottom; i++) {
                list.add(arr[i][right]);
            }
            right--;
            if(top <= bottom) {
                for(int i = right; i >= left; i--) {
                    list.add(arr[bottom][i]);
                }
                bottom--;
            }
            if(left <= right) {
                for(int i = bottom; i >= top; i--) {
                    list.add(arr[i][left]);
                }
                left++;
            }
        }
        return list;
    }
}
