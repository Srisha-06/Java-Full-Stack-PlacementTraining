import React from 'react'

export const Compute = () => {
    const n=6;
    const handleClick=()=>{
        document.getElementById("res").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhtzWGIWaRUKDNaJt-PI94cs5LLM-5iJEvQ&s";
    }
    const handleDoubleclick=()=>{
        document.getElementById("result").textContent="Button DoubleClicked"
    }
  return (
    <div><center>
        <h1>EVENT HANDLING</h1>
        <button onDoubleClick={handleDoubleclick}>DoubleClick</button><br></br>
        <img onClick={handleClick} id="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPL8UiWpZ6VE2Qa8HmlX0SYWIuJIz7z6Qx5w&s"/>
        <h1 id="result"></h1>
        </center>
    </div>
  );
}
