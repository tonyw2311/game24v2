import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useLocation} from 'react-router-dom';
import axios from "axios";

function SubmitScorePage(props) {
    //await new Promise(r => setTimeout(r, 2000));

    const [inputText, setInputText] = useState("");

    const location = useLocation();
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    let score = location.state.score;
    function onSubmit() {
        axios.post('http://localhost:8000/create', {
            name: inputText,
            score: score
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        x();
    }
    const x = ()=> props.setIsFinished(false)
    
    //useBeforeUnload(x);

    return (
        <React.Fragment>
            <br/><br/>
            <h1>Congratulations, you got</h1>
            <h1>{location.state.score}</h1>
            <br/>

            {/* <button onClick={x}>Reset</button> */}
            <p>Enter your name and submit</p>

            <input style={{fontSize:"18pt"}} placeholder="Your Name Here" onChange={handleChange} type="text" value={inputText} />  
            <button style={{fontSize:"18pt"}} onClick={onSubmit}>Submit Score</button>

            <br/><br/>
            <p>or</p>
            <Link className="navbar-link" to="/game">Click here to play again</Link>


        </React.Fragment>
    )

}

export default SubmitScorePage;