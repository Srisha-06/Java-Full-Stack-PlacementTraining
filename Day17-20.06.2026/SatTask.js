import React, { useState } from 'react'

export const SatTask = () => {
    const[task,setTask]=useState("");
    const[name,setName]=useState("");
    const[due,setDue]=useState("");
    const[tasks,setTasks]=useState([]);

    const addTask=()=>{
      fetch("http://localhost:8080/tasks", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task,name,due})
      });
      alert("Task added Successfully!");
    }

    const showTasks=()=>{
      fetch("http://localhost:8080/tasks")
      .then((res)=>res.json())
      .then((data)=>{setTasks(data)
      })
    }

  return (
    <div>
        <h1>Task Page</h1>
        <input type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}></input>
        <br/><br/>

        <input type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}></input>
        <br/><br/>

        <input type="date"
        placeholder="DueDate"
        value={due}
        onChange={(e) => setDue(e.target.value)}></input>
        <br/><br/>

        <button onClick={addTask}>Add Task</button><br/><br/>
        <button onClick={showTasks}>Show Tasks</button>
        <div>
          {tasks.map((t,index) => (
            <p key={index}>{t.task}-{t.name}-{t.due}</p>
          ))}
        </div>
    </div>
  )
}
