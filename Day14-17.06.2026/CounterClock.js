import React, {useState} from "react";

function CounterClock(){
    const [count,setCount]=useState(0);
    // function handleIncrease(){
    //     setCount(count+1);
    // }
    // function handleDecrease(){
    //     setCount(count-1);
    // }
    // function handleReset(){
    //     setCount(0);
    // }
    return(
        <div><center>
            <h1>COUNTER-CLOCK</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h1>{count}</h1>
            </center>
        </div>
    );
}
export default CounterClock;