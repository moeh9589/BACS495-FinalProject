import React, {useState, useEffect} from 'react';
import Question from './question';
import QuestionDisplay from './questiondisplay';

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [update, setUpdate] = useState(0);
    
    useEffect(() => {
        fetch("http://localhost:9000/questions")  
        .then(res => res.json())
        .then(data => setQuestions(data))
    }, [update])
    
    const rerender = () =>{
        var newVal = update + 1;
        console.log(newVal);
        setUpdate(newVal);
    }

    return <div>
        <QuestionDisplay questions={questions}/>
        {/* <Question notifyParent = {rerender}/> */}
    </div>;
}

export default Questions;