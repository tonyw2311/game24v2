import React from "react";

function Leaderboard(props) {
    let bool = props.isHidden
    let data = []
    for (let i = 0; i<props.name.length; i++){
        data.push({name: props.name[i], score: props.score[i]})
    }
    data.sort(function (x, y) { return y.score - x.score || y.name - x.name; });

    
    return (
        <div className="leaderboard" style={bool ? {visibility:"hidden"}: {visibility:"visible"}}>
            <h1>Leaderboard</h1>
            <div>
                {Array.from({ length: data.length }, (_, i) =>
                    <div key = {i}>{i+1}. {data[i].name}: {data[i].score}</div>)}
            </div>
        </div>
    )
}
export default Leaderboard;