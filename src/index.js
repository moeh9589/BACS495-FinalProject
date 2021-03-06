import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from "./logincomps/register"
import reportWebVitals from './reportWebVitals';
import Question from './question';
import Body from './body';
import Welcome from './welcomepage';

ReactDOM.render(
<BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="login/question" element={<Question/>} />
        <Route path="/body" element={<Body/>} />
        <Route path="/login" element={<App/>} />
      </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
