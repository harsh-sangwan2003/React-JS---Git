import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from './redux/actions/index';

const App = () => {

  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  
  return (
    <>

      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>using React & Redux</h4>

        <div className="quantity">
          <button className='minus' onClick={()=>dispatch(decNumber())}>-</button>
          <input type="text" value={myState} />
          <button className='plus'>+</button>
        </div>

      </div>

    </>
  )
}

export default App
