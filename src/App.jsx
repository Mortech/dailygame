import { useState } from 'react'
import './App.css'
import ReverseScrabble from './games/scrabble/ReverseScrabble'

function App() {
    const [activeComponent, setActiveComponent] = useState("")
    const navigationVisible = activeComponent === "";
    // To add games, create a component in the games folder, then add to the games list and returned value

    const gameList = (
        <>
            <h1>Daily Games</h1>
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
        </>
    )

    const backButton = (
        <button onClick={() => setActiveComponent("")}>
            back to games list
        </button>
    )

    return (
        <>
            {navigationVisible && gameList}
            {!navigationVisible && backButton}
            <ReverseScrabble activeComponent={activeComponent}/>
            <p className="footer">
                Source code at <a href="https://github.com/Mortech/dailygame">https://github.com/Mortech/dailygame</a>
            </p>
        </>
    )
}

export default App
