import React from "react";

function SubmitButton(props) {
    let nextText;
    if(props.boolean) {nextText= "Next"} else{ nextText= "Enter"}
    return (
        <div className={props.boolean ? "correct":"incorrect"}>
            <h1 className="correctTextPlacement">{props.text}</h1>
            <button onClick={()=>{
            props.onEvaluate();
            }}>{nextText}</button>
        </div>
    )
}

export default SubmitButton