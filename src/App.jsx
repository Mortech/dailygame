import { useState } from 'react'
import './App.css'
import ReverseScrabble from './games/scrabble/ReverseScrabble'

function App() {
    const [activeComponent, setActiveComponent] = useState("")
    const navigationVisible = activeComponent === "";

    const gameList = (
        <div className="pageCards">
            <div className="card">
                <button onClick={() => setActiveComponent("ReverseScrabble")}>
                    open game
                </button>
                <p>
                    Reverse Scrabble
                </p>
            </div>
        </div>
    )

    const backButton = (
        <button onClick={() => setActiveComponent("")}>
            back to games list
        </button>
    )

    return (
        <>
            <h1>Daily Games</h1>
            {navigationVisible && gameList}
            {!navigationVisible && backButton}
            <ReverseScrabble activeComponent={activeComponent}/>
            <p className="read-the-docs">
                Source code at <a href="https://github.com/Mortech/dailygame">https://github.com/Mortech/dailygame</a>
            </p>
        </>
    )
}

export default App
