import React, { useEffect, useState } from 'react'

function Ue3() {

    const [count, setCount] = useState(0);
    const [txt, setText] = useState({ msg: '' });

    // componentDidMount
    useEffect(() => {

        console.log("Use Effect");
        document.title = `Button clicked ${count} times.`;
    }, [count])

    let changeText = (e) => {

        txt.msg = e.target.value;
        console.log(txt);
        setText({ ...txt });
    }
    console.log("render");

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input type="text" value={txt.msg} onChange={e => changeText(e)} />
        </div>
    )
}

export default Ue3