import React, { Component } from 'react';
import Post from './Post';
import Header from './header';
import Footer from './footer';
import './body.css';
import {Link } from "react-router-dom";
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
        let posts = new Array();
        for (var i = 0; i < this.state.apiResponse.length; i++) {
            var obj = this.state.apiResponse[i];
            posts.push(obj);
            console.log('test\ntest');
        }
  
        const postslist = posts.map(post => (
          <Post title = {post.title} body = {post.body} />
        ));
  
        
          return (
            <div >   
                <Header />
                {/* <div>   
                    <p>{postslist}</p>
                </div> */}
                <div>
                  <Questions/>
                </div>
                <div>
                  <Link to="question"><button>
                    New Question
                  </button>
                  </Link>
                </div>
                <Footer/>
            </div>
  
          );
      }
}


export default Body;