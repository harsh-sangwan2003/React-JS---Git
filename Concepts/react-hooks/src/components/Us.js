import React, { useState } from 'react'

function Us() {

    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ msg: 'Hello' });

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h2>{obj.msg}</h2>
        </div>
    )
}

export default Us