import './App.css';
import RegisterBody from './registerbody.js';
import React from 'react';
import Body from './body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
      <Body/>
      // <Router>
      //   <Routes>
      //     <Route path = '/' element = {<Body/>} />
      //     <Route path = '/register' element = {<RegisterBody />} />
      //   </Routes>
      // </Router>
    );
}

export default App;
