import React, { useState } from 'react'

export const Multiplication_FB = () => {
    const[msg,setMsg]=useState("");
    const[number,setNumber]=useState("");
    function getMessage(){
        fetch("http://localhost:8080/tables/"+number)
        .then((res)=>res.text())
        .then((data)=>setMsg(data));
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Multiplication Table</h1>
        <input type="number" value={number} onChange={(e) => setNumber((e.target.value))}></input>
        <button onClick={getMessage}>Generate Table</button>
        <p style={{whiteSpace:"pre-line"}}>Tables:{"\n"}{msg}</p>
    </div>
  )
}
