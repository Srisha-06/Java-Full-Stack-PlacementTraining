import React from 'react'

export const Greeting=(props)=>{
    return(
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>You are {props.age} years old.</p>
        </div>
    );
};

export const App2 = () => {
  return (
    <div>
        <Greeting name="Srisha" age={19} />
        <Greeting name="Shrinidhi" age={19} />
    </div>
  )
}
