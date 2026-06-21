import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
// import {Home} from './Home';
// import {About} from './About';
// import {Contact} from './Contact';
import {SatTest} from './SatTest';
import {SatTask} from './SatTask';

export const Myrouting = () => {
  return (
    <BrowserRouter>
        <div style={{textAlign:"center", marginTop:"40px"}}>
            <h1>Simple Routing Demo</h1>
            {/* <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav> */}
            <Routes>
                <Route path="/" element={<SatTest />}/>
                <Route path="/tasks" element={<SatTask />}/>
                {/* <Route path="/contact" element={<Contact />}/> */}
            </Routes>
        </div>
    </BrowserRouter>
  )
}
