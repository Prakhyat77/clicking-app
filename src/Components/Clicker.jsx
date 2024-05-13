import React, { useEffect, useState } from 'react'


const Clicker = () => {
    let [clicks, setclicksCount] = useState(0)
    let [timer, setTimer] = useState(10)

    const deadline = Date.now();
    const time = Date.now();



    let updateCount = () => {
        console.log(clicks)
        console.log(time)
        if (clicks === 0) {
            console.log("Start Timer")
        }

        clicks += 1
        setclicksCount(clicks)
    }

    return (
        <>
            <div className="clicks">Clicks in 1 Second</div>
            <div className="note"><span>Note:</span> Clock starts ticking with the first click.</div>
            <div className="clicksCount">Your Score: {clicks}</div>
            <button className="click-btn" onClick={updateCount}  >{(timer >= 0) ? 'Click Here' : 'Click Here to Start'}</button>
            <div className="timer">{timer}</div>
            <div className="record">Do you know the world record for most clicks in 1 second? It's 16 CPS. Challenge yourself to beat it.</div>

        </>
    )
}

export default Clicker