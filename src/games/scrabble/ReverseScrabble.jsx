import { useState } from 'react'
function ReverseScrabble({activeComponent}) {
    const [showRules, setShowRules] = useState(0)
    // Gamestate - Needs turn number, tiles on board, score accumulated, etc
    const [score, setScore] = useState(0)
    const [turn, setTurn] = useState(0)
    if (activeComponent !== "ReverseScrabble") {
        return null;
    }
    // Scrabble should be split into components
    // Grid - A square grid with letters on it, with specific squares marked dw, tw, dl, tl, and start (end in this case)
    // Tiles - the letter and its position on the board, can be clicked to mark as a selection
    // Move / Rack - when selecting tiles, show the word that would be played and whether it is valid. Up to 7 letters
    // Rules - a separate pop-up showing the rules for this game mode
    return (
        <>
            <h2>Reverse Scrabble</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}

export default ReverseScrabble