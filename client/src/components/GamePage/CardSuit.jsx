import React from "react";

function CardSuit(props){
    //finds the image suit
    const image = () => {switch(props.image){
            case("club"): return require("../../images/club.png");
            case("diamond"): return require("../../images/diamond.png");
            case("heart"): return require("../../images/heart.png");
            case("spade"): return require("../../images/spade.png");
            default: return null;
        }}
    
    //arranges suit based on number in grid
    const suitArrangement = () => {switch(props.number){
        //need to add at 4 and 28
        case(1): return [4,28,16];
        case(2): return [4,28,6,26];
        case(3): return [4,28,16,26,6];
        case(4): return [4,28,5,7,25,27];
        case(5): return [4,28,16,5,7,25,27];
        case(6): return [4,28,5,7,25,27,15,17];
        case(7): return [4,28,5,7,25,27,15,17,11];
        case(8): return [4,28,5,7,25,27,15,17,11,21];
        case(9): return [4,28,16,5,7,25,27,10,12,20,22];
        case(10): return [4,28,5,7,25,27,10,12,20,22,11,21];
        default: return null;
    }
    }

    function minify(id){
        if (id === 4||id ===28){
            return "mini"
        }
    }
    
    return(     
    <img draggable = {false} 
        src = {suitArrangement().includes(props.id)? image():""} 
        className={props.id>19 ? "grid-item backwards "+minify(props.id):"grid-item "+minify(props.id)} 
        aria-hidden="true" 
        //visibility = {suitArrangement().includes(props.id)? "visible":"hidden"}
        alt = ""
        //onerror="this.style.display='none'"
    />
    )
}

export default CardSuit;