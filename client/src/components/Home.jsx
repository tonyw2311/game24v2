import React from "react";
import {Link} from "react-router-dom";

function Home (){

    return(
        <div>
            <h1>This is 24!</h1>
            <p>24 is a card game puzzle</p>
            <h2>...</h2>
            <h2 className="objective">Objective: </h2>
            <p className="objective">Find a way to manipulate <br/><strong><em>four integers</em></strong>  so that the end result is</p>
            <h2 style={{margin:0}}><strong><em>24</em></strong></h2>
            <br/>
            <br/>
            <Link className="navbar-link" to="/instructions">Instructions</Link>
            <Link className="navbar-link" to="/game">Play Game</Link>

    
        </div>
    )
}

export default Home