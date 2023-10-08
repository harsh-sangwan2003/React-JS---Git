import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState('');
    const handleClick = () => {

        console.log(name);
    }

    return (
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Form
