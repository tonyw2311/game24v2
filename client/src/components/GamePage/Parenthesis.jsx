import React from "react";

function Parenthesis(props){
    const isClicked = props.boolean;
    return(
        
            <button onClick={() => {
                props.onChecked(props.id);
          }}
          className={!isClicked ? "parenthesis": "parenthesis clickedParen"} value = {!isClicked ? props.text :""}>
            {props.text}
            </button>
    );
}

export default Parenthesis;