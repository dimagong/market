const INITIAL_STATE = {
    cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_COMMODITY_TO_CART':
            return {
                ...state,
                cart: action.payload
            }

        default:
            return state
    }

};

export default cartReducer;
