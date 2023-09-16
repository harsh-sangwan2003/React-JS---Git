import React, { useState } from 'react'

function Bat() {

    const [bat, setBat] = useState(20); // local to the component

    return (
        <div>
            <h1>Bats: {bat}</h1>
            <button onClick={() => setBat(bat - 1)}>Buy</button>
        </div>
    )
}

export default Bat