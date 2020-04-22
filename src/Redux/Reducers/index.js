import {combineReducers} from 'redux'


import products from './products'
import cartReducer from './cart.reducer'
import loginInReducer from './login-in.reducer'

const appRedux = combineReducers({
    products,
    cartlist: cartReducer,
    login: loginInReducer

})

const reducer = (state, action) => {
    return appRedux(state, action)
}

export default reducer;
