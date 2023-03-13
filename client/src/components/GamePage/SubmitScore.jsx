import React from "react";
import {Link, useNavigate} from "react-router-dom";

function SubmitScore(props) {
    const navigate = useNavigate();
    let bool = props.isHiddenScore
   
    function gameOver() {
        if (props.isHiddenScore) navigate('/gameFinished', { state: { score: props.score } });
    }

    
    return (
        <div className="leaderboard" style={bool ? {visibility:"visible"}:{visibility:"hidden"}}>
        <Link className="navbar-link" to="/game">Play Again</Link>
        <button className= "navbar-link" onClick={gameOver}>Submit Score</button>
        </div>
    )
}
export default SubmitScore;