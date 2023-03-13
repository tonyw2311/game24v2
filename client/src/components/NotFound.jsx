import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {

    return (
        <React.Fragment>
            <h1>Oops! You seem to be lost!!!</h1>
            <Link className="navbar-link" to="/game">Click here to play 24</Link>

        </React.Fragment>
    )

}

export default NotFound;