import './App.css';
import React from 'react';
import Body from './body';
import useToken from './useToken';
import Login from './logincomps/login';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
      <div>
          <Body/>
      </div>
    );
}

export default App;
