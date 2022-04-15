import './App.css';
import RegisterBody from './registerbody.js';
import React from 'react';
import Body from './body';
import useToken from './useToken';
import Login from './logincomps/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
      <div>
          <Body/>
      </div>
      // <Router>
      //   <Routes>
      //     <Route path = '/' element = {<Body/>} />
      //     <Route path = '/register' element = {<RegisterBody />} />
      //   </Routes>
      // </Router>
    );
}

export default App;
