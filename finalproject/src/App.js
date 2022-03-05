import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import RegisterBody from './registerbody.js';
import Login from './logincomps/login';
import Register from './logincomps/register'
import React, { Component } from 'react';

class App extends Component  {

    constructor(props) {
      super(props);
      this.state = {apiResponse: "poop" };

    }


    callbutton() {
      this.callAPI();
    }
    // componentDidMount() {

    //     this.callAPI();
    // }

     callAPI () {
     fetch('http://localhost:9000/users', { method: 'GET' } )
      .then(res=> res.json())
      .then(res=> this.setState({apiResponse : res}))
      // .then(res => alert(JSON.stringify(res)))
      .catch(err => err);

    }



    render () {
        return (
          <div>       
              <Header />
              <p></p>
              <button onClick={this.callAPI}>Call API</button>

              <p>Test call: {this.state.apiResponse}</p>
              <Footer/>
          </div>

        );
    }
}

export default App;
