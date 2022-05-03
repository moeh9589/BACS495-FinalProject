import './post.css';
import React, {useState, useEffect} from 'react';

import {Link } from "react-router-dom";


function QuestionDisplay(props) {
    const [update, setUpdate] = useState(0);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/questions")  
            .then(res => res.json())
    }, [update])


    const voteQuestion = (id, votes) =>{
        var newVotes = votes == null ? 1 : votes + 1;
        var updatequestion = {'id': id, 'votes': newVotes}
        fetch("http://localhost:9000/questions", 
            {
                method:'PUT', 
                body: JSON.stringify(updatequestion),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                }
            })  
            .then(res => res.json())
            .then(setUpdate(update + 1))
            .then(console.log("finished"))
    }

    const answerQuestion = (id, answer) => {
        var updateAnswer = {'id': id, 'answer': answer}

        fetch("http://localhost:9000/questions", 
            {
                method:'PATCH', 
                body: JSON.stringify(updateAnswer),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                }
            }) 
            .then(res => res.json())
            // .then(setUpdate(update + 1))
            .then(console.log("finished"))
            
        handleAnswer(answer)
    }

    const handleAnswer = (e) => {
        setAnswer(e.target.value);
    };

    return (
    <div>
        <h1 className='h1__'>Welcome to JustInCase! Feel free to ask any question or answer one if you feel you're smart enough...</h1><br/>
        <Link to="question"><button className='btn3'>
        Ask a Question                  
        </button>
        </Link>
        <div className=''>   
            {props.questions.map(u => 
            <div className='box'>
                <div className='child'>
                    <h1 className='h11'>Subject: {u.subject}</h1>
                    <div className='dark'>
                        <p className='up'>{u.qbody}</p> 
                    </div>          
                    <input onChange={handleAnswer} className="input1" placeholder='Answer here' value={answer} type="text" />
                    <button className='btn1' value="Answer" onClick={() => answerQuestion(u.id, answer)}> Submit Answer</button>
                    <h1 className='h11'> Current Answer:</h1>
                    <div className='dark'> 
                    <p className='up'>{u.answer}</p>
                    </div>
                    
                    <button className='btn2' value="Vote" onClick={() => voteQuestion(u.id, u.votes)}>Vote</button> 
                    <p className='upleft'> Votes: {u.votes}</p>
                </div>  
            </div>
            )}     
        </div>
    </div>
    );
}
    
export default QuestionDisplay;