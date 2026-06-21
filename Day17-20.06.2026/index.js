import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {App} from './App';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
//import {SatTest} from './SatTest';
import {Myrouting} from './Myrouting';
//import HelloWithDb_FB from './HelloWithDb_FB';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myrouting />
  </React.StrictMode>
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<LoginHook />}/>
  //   <Route path="/signup" element={<Signup />}/>
  // </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
