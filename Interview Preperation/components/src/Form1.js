import React, { useRef, useState } from 'react'

function Form1() {

    const inputValue = useRef();

    const handleClick = () => {

        console.log(inputValue.current.value);
    }

    return (
        <div>
            <label>Name:</label>
            <input type="text" ref={inputValue} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Form1
