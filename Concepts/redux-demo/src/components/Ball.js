import React,{useState} from 'react'
import { connect } from 'react-redux'

function Ball({ balls, buyBall, sellBall }) {

    const [qty, setQty] = useState(1);

    return (
        <div>
            <h1>Balls : {balls}</h1>
            <input type="number" onChange={(e) => setQty(e.target.value)} />
            <button onClick={() => buyBall(qty)}>Buy</button>
            <button onClick={() => sellBall(qty)}>Sell</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {

        balls: state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        buyBall: (qty) => dispatch({ type: 'BUY_BALL', payload: qty }),
        sellBall: (qty) => dispatch({ type: 'SELL_BALL', payload: qty })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
