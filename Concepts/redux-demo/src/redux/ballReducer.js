const initialState = {

    balls: 20
}

const BallReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'BUY_BALL':
            return { ...state, bats: state.balls - 1 }

        case 'SELL_BALL':
            return { ...state, bats: state.balls + 1 }

        default:
            return state;
    }
}

export default BallReducer;