import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Backbutton from "../backbutton";
import PropTypes from 'prop-types';
import setToken from '../useToken.js'

async function loginUser(credentials) {
  return fetch('http://localhost:9000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({ setToken }) {
  const [username, setUserName] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async event => {
    
    event.preventDefault();

    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  // return (
  //   <div>
  //     <Backbutton/>
  //   <div className="Login">
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
        
  //       <Button block size="lg" type="submit" disabled={!validateForm()}>
  //         Login
  //       </Button>
  //     </Form>
  //   </div></div>
  // );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
