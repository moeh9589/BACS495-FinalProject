import './post.css';


function QuestionDisplay(props) {
    return (
    <div>
        <h1>Here is the list of current questions in the database</h1><br/>
        <div>   
            {props.questions.map(u => 
            <div className='box'>
                <h1>Subject:{u.subject}</h1>
                <p>body-{u.qbody}</p>
                <p>Answers: {u.answer}</p>
            
            </div>)}     
        </div>
    </div>
    );
}
    
export default QuestionDisplay;