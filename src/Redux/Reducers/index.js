import {combineReducers} from 'redux'


import products from './products'
import cartReducer from './cart.reducer'

const appRedux = combineReducers({
    products,
    cartlist: cartReducer
})

const reducer = (state, action) => {
    return appRedux(state, action)
}

export default reducer;
