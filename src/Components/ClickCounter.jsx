import React, { useState, useEffect } from 'react';

function ClickCounter() {
    const [clickCount, setClickCount] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [score, setScore] = useState(0)

    let timer;

    let setTimer = () => {
        setTimeLeft((prevTimeLeft) => {
            if (prevTimeLeft === 0) {
                clearInterval(timer);
                setScore(clickCount)
                setTimerRunning(false);
                setClickCount(0);
                return 0;
            }

            return prevTimeLeft - 10;
        });
    }

    useEffect(() => {

        if (timerRunning) {
            timer = setInterval(setTimer, 10);
        }

    }, [timerRunning]);

    const handleButtonClick = () => {
        if (!timerRunning) {
            setTimerRunning(true);
            setTimeLeft(1000);
        }
        setClickCount((prevCount) => prevCount + 1);
        console.log("Time Left", timeLeft)

    };

    const formatSecond = (ms) => {
        return (ms / 1000).toFixed(3);
    }

    return (
        <div>
            <h1>Click Counter</h1>
            <button onClick={handleButtonClick}>Click Me</button>
            <p>Time left: {formatSecond(timeLeft)} milliseconds</p>
            <p>Number of clicks: {clickCount}</p>
            {timerRunning ? null : <p>Your Score: {score}</p>}
        </div>
    );
}

export default ClickCounter;
