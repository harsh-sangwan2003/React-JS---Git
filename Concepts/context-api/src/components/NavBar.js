import React, { useContext } from 'react'
import context from './Context'

function NavBar() {

    const theme = useContext(context);

    return (
        <div className={theme ? `dark` : `light`}>
            NavBar
        </div>
    )
}

export default NavBar