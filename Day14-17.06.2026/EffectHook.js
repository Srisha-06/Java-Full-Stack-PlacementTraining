import React, {useState, useEffect} from "react";

function EffectHook(){
    const [message, setMessage]=useState("Loading...");

    useEffect(()=>{
        const timer=setTimeout(()=> {
            setMessage("Hello, this is useEffect in action!");
        },4000); //wait for 4 seconds

        return()=> clearTimeout(timer);
    },[]);

    return(
        <div><center>
            <h1>{message}</h1>
            </center>
        </div>
    )
}

export default EffectHook;