import React from 'react'
import Clicker from './Components/Clicker'
import Header from './Components/Header'
import './App.css';
import ClickCounter from './Components/ClickCounter';

const App = () => {
    return (
        <>
            <Header />
            <Clicker />
            <ClickCounter />
        </>
    )
}

export default App