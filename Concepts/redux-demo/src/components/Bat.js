import React from 'react'
import { connect } from 'react-redux';

function Bat(props) {

  // const [bat, setBat] = useState(20);
  console.log(props);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bats : {props.bats}</h1>
      <button onClick={props.buyBat}>Buy Bat</button>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {

    bats: state.bats
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    buyBat: () => dispatch({ type: "BUY_BAT" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
