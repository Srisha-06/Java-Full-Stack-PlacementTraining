import React, {useState, useEffect} from 'react'

export const Dependancyarray = () => {
    const [count,setCount]=useState(0);

    //useEffect runs whenever 'count' changes
    useEffect(()=>{
        console.log("Count changed to: ",count);
        alert("Count is now "+count);
    },[count]);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  );
}
