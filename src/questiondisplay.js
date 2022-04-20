import './post.css';
import React, {useState, useEffect} from 'react';



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
        <h1>Here is the list of current questions in the database</h1><br/>
        <div>   
            {props.questions.map(u => 
            <div className='box'>
                <button value="Vote" onClick={() => voteQuestion(u.id, u.votes)}>Vote</button> 
                <p> Votes: {u.votes}</p>
                <p>ID {u.id}</p>
                <h1>Subject:{u.subject}</h1>
                <p>body-{u.qbody}</p>
                <p>Answer This Question: </p>
                <input onChange={handleAnswer} className="input"
                value={answer} type="text" />
                <button value="Answer" onClick={() => answerQuestion(u.id, answer)}> Answer Question</button>
                <p> Current answers:</p>
                <p>{u.answer}</p>
                
            
            </div>)}     
        </div>
    </div>
    );
}
    
export default QuestionDisplay;