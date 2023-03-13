import React from "react";
import {Link} from "react-router-dom";

function NavBar (props){

return(
    <div className="navbar">
    <Link className="navbar-link" to="/">=24</Link>
    <Link className="navbar-link" to="/game">Play Game</Link>
    <Link className="navbar-link" to="/instructions">Instructions</Link>
    
</div>
)

}

export default NavBar;