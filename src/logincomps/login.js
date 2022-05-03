import "./Register.css";
import Backbutton from "../backbutton";
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';


async function loginUser(credentials, users) {
  for (var i = 0; i < users.length; i++) {
    console.log("test"+users[i].name +"\n");
  
    if (String(credentials.username) === (String(users[i].name))  && String(credentials.password) === (String(users[i].password))) {
      console.log("success!!");
    
      return fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
    }
    else {
      console.log("unsuccessful login");
      
    }
    console.log(users[i]);
    }
  }





export default function Login({ setToken }) {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState("");
  const [update] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9000/users")  
    .then(res => res.json())
    .then(data => setUsers(data))
}, [update])


  const handleSubmit = async event => {
    event.preventDefault();
    // getAllUsers();
  //   let users = new Array();

  //   for(var i = 0; i < this.state.apiResponse.length; i++) {
  //     var obj = this.state.apiResponse[i];
  //     users.push(obj);
  //     console.log('test\ntest');
  // }

  // for (var i = 0; i < users.length; i++) {
  //   console.log(users[i]);
  // }


    const token = await loginUser({
      username,
      password
    }, users);
    setToken(token);
  }
  return(
    <div className="padleft">
      <Backbutton/>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input className="input" type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input className="input" type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="button1" type="submit">Submit</button>
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
