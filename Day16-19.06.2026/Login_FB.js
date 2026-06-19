import React, { useState } from 'react'

export const Login_FB = () => {
    const [user,setUser]=useState("");
    const [pswd,setPswd]=useState("");

    const handleClick=()=>{
        fetch("http://localhost:8080/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username:user, password:pswd}),
        })
        .then((res) => res.text())
        .then((data) => alert(data)) //backend reply
        .catch(() => alert("Backend not reachable"));
    }
  return (
    <div><center>
        <h2>Login Page</h2>
        <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}/>
        <br/><br/>

        <input
        type="text"
        placeholder="Password"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}/>
        <br/><br/>

        <button onClick={handleClick}>Login</button>
        </center>
    </div>
  )
}
