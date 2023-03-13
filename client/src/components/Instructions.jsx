import React, {useState} from "react";
import { Link } from "react-router-dom";
import GameSection from "./GamePage/GameSection";

function Instructions() {
    let randFour = [5, 4, 10, 4];
    let randCard = ["spade", "spade", "spade", "heart"]
    let image = require("../images/instructions.png");
    const [visibility, setVisibility] = useState("hidden")
    function changeVisible(){
        setVisibility("visible");
    }

    return (
        <div >
            <br />
            <br />
            <br />
            <h1 className="instructions">Instructions</h1>

            <h2 className="instructions">Use the four cards to make the number 24 by using
                <br />addition, subtraction, multiplication, and division. </h2>
            <hr></hr>
            <br />
            <br />
            <br />
            <h2 className="instructions" style={{ margin: 0, marginLeft: 200 }}>Below is how you would use the game interface</h2>
            <img src={image} className="instructionImage"></img>
            <hr></hr>
            <br />
            <br />
            <br />

            <h1 className="instructions" style={{ margin:"0px"}}> Try it yourself</h1>
            <button onClick = {changeVisible} style={{ display: "inline-flex", marginRight:"20px"}}>Click for answer</button>
            <h2 style={{ visibility: visibility, display: "inline-flex", margin:"0px 20px 10px"}} >(10-5)*4+4 </h2>

            <div>
                <GameSection randFour={randFour} randCard={randCard} />
                <br />
                <Link className="navbar-link" to="/game">PLAY</Link>
            </div>

        </div>
    )
}

export default Instructions