import React, { useState } from "react";// {useState}
import GamePage from "./GamePage";
import NavBar from "./NavBar";
import Home from "./Home";
import { Routes, Route, Navigate} from "react-router-dom";
import Instructions from "./Instructions";
import NotFound from "./NotFound";
import SubmitScorePage from "./SubmitScorePage";

function App() {
    const [isFinished, setIsFinished] = useState(false);

    const Protected = ({ isLoggedIn, children }) => {
        if (!isLoggedIn) {
            return <Navigate to="/game" replace />;
        }
        return children;
    };

    function falsify (){
        console.log('workedd')
        setIsFinished(false);
    }

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<GamePage setIsFinished={setIsFinished} isFinished={isFinished} />} />
                <Route path="/gameFinished" onLeave= {falsify}
                    element={<Protected isLoggedIn={isFinished}>
                    <SubmitScorePage setIsFinished={setIsFinished}  />
                    </Protected>
                    } />

                <Route path="/instructions" element={<Instructions />} />
                <Route path='*' element={<NotFound />} />
                {/* <Navigate to="/home"/> */}
            </Routes>
        </div>
    );
}

export default App;