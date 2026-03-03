import { useState } from 'react'
function ReverseScrabble({activeComponent}) {
    const [count, setCount] = useState(0)
    if (activeComponent !== "ReverseScrabble") {
        return null;
    }
    return (
        <>
            <h1>Hello World</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}

export default ReverseScrabble