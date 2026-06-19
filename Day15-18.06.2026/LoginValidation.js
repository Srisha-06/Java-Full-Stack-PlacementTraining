import React from 'react'

export const LoginValidation = () => {
    const username="Srisha";
    const password="sri2006";
    const handleClick=()=>{
        let user=document.getElementById("uid").value;
        let pass=document.getElementById("pid").value;
        if(user===username){
            if(pass===password){
                alert("Login Successfull!");
            }
            else{
                alert("Login Failure, Wrong password");
            }
        }else if(pass===password){
            alert("Login Failure, Wrong Username");
        }else{
            alert("Login Failure, Check your Username and Password");
        }
    }
  return (
    <div>
        <label>Enter Your Name: </label>
        <input id="uid" type="text" placeholder="Username"></input>
        <br/><br/>
        <label>Enter Your Password: </label>
        <input id="pid" type="password" placeholder="Password"></input>
        <br/><br/>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}
