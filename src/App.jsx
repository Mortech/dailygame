import { useState } from 'react'
import './App.css'
import ReverseScrabble from './games/scrabble/ReverseScrabble'

function App() {
    const [gameComponent, setGameComponent] = useState(null)

    if (gameComponent !== null) {
        return (
            <>
                <button onClick={() => setGameComponent(null)}>
                        back to games list
                </button>
                {gameComponent}
            </>
        )
    }

    return (
        <>
            <h1>Daily Games</h1>
            <div className="pageCards">
                <div className="card">
                    <button onClick={() => setGameComponent(ReverseScrabble)}>
                        open game
                    </button>
                    <p>
                        Reverse Scrabble
                    </p>
                </div>
            </div>
            <p className="read-the-docs">
                Source code at <a href="https://github.com/Mortech/dailygame">https://github.com/Mortech/dailygame</a>
            </p>
        </>
    )
}

export default App
