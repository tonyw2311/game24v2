import React, { useState, useEffect } from "react";


function Timer(props) {

    const { initialMinute = '00', initialSeconds = '30' } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    const start = Date.now()



    useEffect(() => {
        let myInterval = setInterval(() => {
            let delta = Math.round(Number(minutes) * 60 + Number(seconds) - (Date.now() - start) / 1000)

            if (delta <= 0) {
                setMinutes("00");
                setSeconds("00");

                props.setIsFinished(true);


            } else {
                setSeconds(Math.round(delta % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }));
                setMinutes(Math.floor(delta / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }));
            }

        }, 1000)
        return () => clearInterval(myInterval);
    }, []);

    return (
        <h1 className="timer" >
            {minutes}:{seconds}
        </h1>
    )
}

export default Timer