import React from "react";

function OperationBox(props){

     const isClicked =props.boolean;

    return(
            <button 
                onClick={() => {
                    props.onChecked(props.id);
              }}
              className={isClicked ? 'isSelected operation' : 'operation'}>
                {props.text}
            </button>

    );
}

export default OperationBox;
