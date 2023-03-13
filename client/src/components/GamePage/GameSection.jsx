import React, { useState, useEffect } from "react";
import Card from "./Card"
import OperationBox from "./OperationBox";
import Parenthesis from "./Parenthesis";
import SubmitButton from "./SubmitButton";

function GameSection(props) {

    useEffect(() => {
        updateBoxes();
    }, [props.randCard, props.randFour]);

    const [isActive, setIsActive] = useState([
        {
            id: 0,
            bool: true,
            operation: ""
        },
        {
            id: 1,
            bool: false,
            operation: ""
        },
        {
            id: 2,
            bool: false,
            operation: ""
        },

    ]);
    const [isActivePar, setIsActivePar] = useState([
        {
            id: 0,
            bool: false,
            text: "("
        },
        {
            id: 1,
            bool: false,
            text: "("
        },
        {
            id: 2,
            bool: false,
            text: ")"
        },
        {
            id: 3,
            bool: false,
            text: "("
        },
        {
            id: 4,
            bool: false,
            text: ")"
        },
        {
            id: 5,
            bool: false,
            text: ")"
        }]);

    const [boxes, setBoxes] = useState([
        {
            id: 0,
            number: props.randFour[0],
            suit: props.randCard[0]
        },
        {
            id: 1,
            number: props.randFour[1],
            suit: props.randCard[1]
        },
        {
            id: 2,
            number: props.randFour[2],
            suit: props.randCard[2]
        },
        {
            id: 3,
            number: props.randFour[3],
            suit: props.randCard[3]
        }

    ])
    function reset() {
        updateBoxes();
        setIsActivePar([
            {
                id: 0,
                bool: false,
                text: "("
            },
            {
                id: 1,
                bool: false,
                text: "("
            },
            {
                id: 2,
                bool: false,
                text: ")"
            },
            {
                id: 3,
                bool: false,
                text: "("
            },
            {
                id: 4,
                bool: false,
                text: ")"
            },
            {
                id: 5,
                bool: false,
                text: ")"
            }]);
        setIsActive([{
            id: 0,
            bool: true,
            operation: ""
        },
        {
            id: 1,
            bool: false,
            operation: ""
        },
        {
            id: 2,
            bool: false,
            operation: ""
        },])
    }
    function updateBoxes() {
        let numbers = props.randFour
        let cards = props.randCard
        const update = boxes.map(box => {
            return {
                ...box,
                number: numbers[box.id],
                suit: cards[box.id],
            }
        })
        setBoxes(update)
    }

    function arithmetics(event) {
        const x = event.target.value;
        const updateActivity = isActive.map(i => {
            if (i.bool) {
                return {
                    ...i,
                    operation: x
                }
            }
            else {
                return { ...i }
            }
        })
        setIsActive(updateActivity)
    }

    function handleClickPar(id) {
        const updateActivity = isActivePar.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    bool: !i.bool
                }
            }
            else {
                return {
                    ...i
                }
            }
        })
        setIsActivePar(updateActivity);
    }
    function handleClickOP(id) {
        const updateActivity = isActive.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    bool: true
                }
            }
            else {
                return {
                    ...i,
                    bool: false
                }
            }
        })
        setIsActive(updateActivity);
    };

    const swapBoxes = (fromBox, toBox) => {
        let fromNumber = boxes[fromBox.id].number;
        let toNumber = boxes[toBox.id].number;
        let fromSuit = boxes[fromBox.id].suit;
        let toSuit = boxes[toBox.id].suit;

        const updateBox = boxes.map(box => {
            if (box.id === fromBox.id) {
                return {
                    ...box,
                    number: toNumber,
                    suit: toSuit
                }
            } else if (box.id === toBox.id) {
                return {
                    ...box,
                    number: fromNumber,
                    suit: fromSuit
                }
            } else {
                return box;
            }
        });
        setBoxes(updateBox);
    };

    const handleDragStart = data => event => {
        let fromBox = JSON.stringify({ id: data.id });
        event.dataTransfer.setData("dragContent", fromBox);

    };

    const handleDragOver = data => event => {
        event.preventDefault(); // Necessary. Allows us to drop.
        return false;
    };

    const handleDrop = data => event => {
        event.preventDefault();

        let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
        let toBox = { id: data.id };
        swapBoxes(fromBox, toBox);

        return false;
    };
    const [evaluateBool, setEvaluateBool] = useState("");
    const [evaluateText, setEvaluateText] = useState(null);

    function evaluation() {
        if (evaluateText === 'CORRECT') {
            setEvaluateText("")
            props.nextSet();
            reset();
            setEvaluateBool(false);
        } else {
            let parValue = isActivePar.map(i => {
                if (i.bool) {
                    return i.text;
                }
                else {
                    return "";
                }
            });
            let equationString = parValue[0] + boxes[0].number.toString() +
                isActive[0].operation + parValue[1] + boxes[1].number.toString() +
                parValue[2] + isActive[1].operation + parValue[3] + boxes[2].number.toString() + parValue[4] +
                isActive[2].operation + boxes[3].number.toString() + parValue[5];
            try {
                setEvaluateBool(eval(equationString) === 24)
                if ((eval(equationString) === 24)) {
                    setEvaluateText("CORRECT");
                } else {
                    setEvaluateText("WRONG");
                }
                try{
                props.updateScore((eval(equationString) === 24))}
                catch{
                
                }
            }
            catch (err) {

                setEvaluateText("ERROR");
            }
        }
    }


    return (
        <div className="box">
            <div className="">
                <div className="game-grid-organization">
                    <Parenthesis onChecked={handleClickPar} id={isActivePar[0].id} boolean={isActivePar[0].bool} text={isActivePar[0].text} />
                    <Card suit={boxes[0].suit} number={boxes[0].number} id={0} draggable={"true"} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} />

                    <OperationBox boolean={isActive[0].bool} onChecked={handleClickOP} text={isActive[0].operation} id={0} />
                    <Parenthesis onChecked={handleClickPar} id={isActivePar[1].id} boolean={isActivePar[1].bool} text={isActivePar[1].text} />
                    <Card suit={boxes[1].suit} number={boxes[1].number} id={1} draggable={"true"} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} />

                    <Parenthesis onChecked={handleClickPar} id={isActivePar[2].id} boolean={isActivePar[2].bool} text={isActivePar[2].text} />
                    <OperationBox boolean={isActive[1].bool} onChecked={handleClickOP} text={isActive[1].operation} id={1} />
                    <Parenthesis onChecked={handleClickPar} id={isActivePar[3].id} boolean={isActivePar[3].bool} text={isActivePar[3].text} />
                    <Card suit={boxes[2].suit} number={boxes[2].number} id={2} draggable={"true"} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} />

                    <Parenthesis onChecked={handleClickPar} id={isActivePar[4].id} boolean={isActivePar[4].bool} text={isActivePar[4].text} />
                    <OperationBox boolean={isActive[2].bool} onChecked={handleClickOP} text={isActive[2].operation} id={2} />
                    <Card suit={boxes[3].suit} number={boxes[3].number} id={3} draggable={"true"} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} />
                    <Parenthesis onChecked={handleClickPar} id={isActivePar[5].id} boolean={isActivePar[5].bool} text={isActivePar[5].text} />
                </div>
            </div>
            <br />
            <br />
            <div>
                <button onClick={arithmetics} className='arith' value="*">*</button>
                <button onClick={arithmetics} className='arith' value="/">/</button>
                <button onClick={arithmetics} className='arith' value="+">+</button>
                <button onClick={arithmetics} className='arith' value="-">-</button>
            </div>

            <SubmitButton onEvaluate={evaluation} boolean={evaluateBool} text={evaluateText} />

            <button onClick={reset}>Reset</button>

        </div>
    )
}
export default GameSection;