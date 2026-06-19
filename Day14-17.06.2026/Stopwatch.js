import React from 'react'

export const Stopwatch = () => {
    var n=0;
    const plus=()=>{
        document.getElementById("res").textContent=n+1;
        n=n+1;
    }
    const minus=()=>{
        document.getElementById("res").textContent=n-1;
        n=n-1;
    }
  return (
    <div><center>
        <h1>STOP WATCH</h1>
        <button onClick={plus}>+</button><br></br>
        <button onClick={minus}>-</button>
        <h1 id="res">{n}</h1>
        </center>
    </div>
  );
}
