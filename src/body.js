import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Questions from './questionlist';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: " " };
      }

      componentDidMount() {
          this.callAPI();
      }
  
      callAPI () {
          fetch('http://localhost:9000/posts', 
          { method: 'GET' 
            })
            .then(res=> res.json())
            .then(res=> this.setState({apiResponse : res}))
            .catch(err => err);
      }
    
      render () {
        let posts = [];
        for (var i = 0; i < this.state.apiResponse.length; i++) {
            var obj = this.state.apiResponse[i];
            posts.push(obj);
            console.log('test\ntest');
        }
        
          return (
            <div >   
                <Header name = "JustInCase"/>
                <div>
                  <Questions/>
                </div>
                <Footer/>
            </div>
          );
      }
}


export default Body;