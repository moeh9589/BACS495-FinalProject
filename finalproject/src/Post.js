import React, { Component } from 'react';
import './post.css';


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
        };
    }



    render() {
        return (
            <div className='container'>
            <div className='box'>  
                <h1>
                    Title: {this.state.title}
                </h1> 
                <p>
                    Body: {this.state.body}
                </p>
            </div>
            </div>
        );
    }
}


export default Post;