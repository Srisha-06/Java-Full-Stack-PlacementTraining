import React, {useState,} from 'react'
import {useNavigate} from "react-router-dom";

export const LoginHook = () => {
    const[user,setUser]=useState("");
    const[pass,setPass]=useState("");
    const[resultuser,setResultuser]=useState("");
    const[resultpass,setResultpass]=useState("");

    const navigate=useNavigate();

    const myuser="srisha";
    const mypass="sri2006";

    const handleClick=()=>{
        setResultuser(user);
        setResultpass(pass);

        if(user===myuser && pass===mypass){
            alert("Login Successfull!");
        }else{
            alert("Login Failed!");
        }
    }
    const handleSignup=()=>{
      navigate("/signup");
    }

  return (
    <div style={{
        textAlign: "center",
        marginTop: "100px",
        border: "1px solid #ccc",
        width: "250px",
        margin: "100px auto",
        padding: "20px",
        borderRadius: "10px",
      }}><center>
        <input type="text" 
        placeholder="Username" 
        value={user} 
        onChange={(e) => setUser(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "10px",
        }}/>
        <br/><br/>
        <input type="password" 
        placeholder="Password" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "10px",
        }}/>
        <br/><br/>
        <button onClick={handleClick}
        style={{
          padding: "8px 20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}>Login</button>
        
        <button onClick={handleSignup}
        style={{
          padding: "8px 20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}>SignUp</button>
        {/* <h3>{resultuser}</h3>
        <h3>{resultpass}</h3> */}
        </center>
    </div>
  )
}
