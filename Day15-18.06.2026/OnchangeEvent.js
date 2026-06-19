import React, {useState} from 'react'

export const OnchangeEvent = () => {
    const [text, setText] = useState("");
    
  return (
    <div>
         <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
        <h1>{text}</h1>
    </div>
  )
}
