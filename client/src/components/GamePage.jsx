import React, { useState, useEffect } from "react";// {useState}
import GameSection from "./GamePage/GameSection";
import Leaderboard from "./GamePage/Leaderboard";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import SubmitScore from "./GamePage/SubmitScore";



function GamePage(props) {
    const navigate = useNavigate();
    const [randFour, setRandFour] = useState([1, 2, 3, 4]);
    const [randCard, setRandCard] = useState(["spade", "heart", "club", "diamond"]);
    const [score, setScore] = useState(0);
    const [nameList, setNameList] = useState("");
    const [scoreList, setScoreList] = useState("");
    const [isHidden, setIsHidden] = useState(true);


    //functions from node
    useEffect(() => {
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((data) => { setRandFour(data.randFour); setRandCard(data.randCard) });
    }, []);

    //data from mongoDB->node->react
    useEffect(() => {
        fetch("http://localhost:8000/home")
            .then((res) => res.json())
            .then((dataSet) => {
                let tempNameList = []
                let tempScoreList = []
                dataSet.forEach(data => {
                    tempNameList.push(data.name);
                    tempScoreList.push(data.score);
                })
                setNameList(tempNameList);
                setScoreList(tempScoreList);
            });
    }, []);

    function nextSet() {
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((data) => { setRandFour(data.randFour); setRandCard(data.randCard) });
    };

    function updateScore(isCorrect) {
        if (isCorrect) {
            setScore(score + 100);
        }
        else {
            setScore(score - 25);
        }
    }


    function changeVisibility() {
        setIsHidden(!isHidden)
    }


    return (
        <div>
            <br />
            <div style={{ display: "inline-flex" }}>
                <h1> Score: {score}</h1>
            </div>
            <Timer changeVisibility={changeVisibility} setIsFinished={props.setIsFinished} />

            <GameSection randFour={randFour} randCard={randCard} updateScore={updateScore} nextSet={nextSet} />

            <button onClick={changeVisibility}>View Leaderboard</button>
            <Leaderboard name={nameList} score={scoreList} isHidden={isHidden} />
            <SubmitScore isHiddenScore = {props.isFinished} score = {score}></SubmitScore>
          

        </div>
    );
}
export default GamePage;