import React, { useEffect, useState } from 'react'

function Infinite() {

    const [count, setCount] = useState(0);

    // componentDidMount
    useEffect(() => {

        console.log("Use Effect");
        document.title = `Button clicked ${count} times.`;

        let num = Math.random();
        setCount(num);
        // No infinite loop
        // setCount(100);
    })

    console.log("render");

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Infinite