import React, {useState, useEffect} from 'react';
import Backbutton from './backbutton';
import { v4 as uuidv4 } from "uuid";

export default function Question(props) {
    const [subject, setSubject] = useState('');
    const [qbody, setqBody] = useState('');
    const [answer, setAnswer] = useState('');

    const createQuestion = (e) => {
        console.log("$$$$$$$$$$$$$$$");
        var id = uuidv4();
        var votes = 0;
        var insert = {'id': id, 'subject': subject, 'qbody': qbody, 'answer': answer, "votes":votes}

        fetch ("http://localhost:9000/questions",
        {
        method:'POST',
        body: JSON.stringify(insert),
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                }
            
        }
        )
        .then(res => res.json())
        .then(data => console.log(data))
props.notifyParent();
handleSubmit();
}

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleSubject = (e) => {
    setSubject(e.target.value);
    setSubmitted(false);
};

// Handling the email change
const handleqBody = (e) => {
    setqBody(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handleAnswer = (e) => {
    setAnswer(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (subject === '' || qbody === '') {
    setError(true);
    } else {
    setSubmitted(true);
    setError(false);
    createQuestion(e);
    console.log("%%%%%%%%%");
    }
};

  // Showing success message
const successMessage = () => {

    return (
    <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
        }}>
        <h1>Post successfully submitted!!</h1>
    </div>
    );
};

  // Showing error message if error is true
const errorMessage = () => {
    return (
    <div
        className="error"
        style={{
        display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
    </div>
    );
};

return (
    <div className='padleft'>
        <div>
            <Backbutton/>
        <div className="form">
        <div>
            <h1> New Question </h1>
        </div>
        
        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        
        <form className='left'>
            {/* Labels and inputs for form data */}
            <label className="label">Subject</label>
            <input onChange={handleSubject} className="input"
            value={subject} type="text" />
        
            <label className="label">Body</label>
            <input onChange={handleqBody} className="input"
            value={qbody} type="text" />
        
            {/* <label className="label">Answer:</label>
            <input onChange={handleAnswer} className="input"
            value={answer} type="text" /> */}
        
            <button onClick={handleSubmit} className="button1" type="submit">
            Submit
            </button>
        </form>
        </div>
        </div>
    </div>
    );
}