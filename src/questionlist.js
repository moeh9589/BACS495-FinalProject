import React, {useState, useEffect} from 'react';
import QuestionDisplay from './questiondisplay';

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [update] = useState(0);
    
    useEffect(() => {
        fetch("http://localhost:9000/questions")  
        .then(res => res.json())
        .then(data => setQuestions(data))
    }, [update])
    


    return <div>
        <QuestionDisplay questions={questions}/>
    </div>;
}

export default Questions;