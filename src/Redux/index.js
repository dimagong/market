import {createStore, applyMiddleware} from "redux"

import reducer from './Reducers/index'

import {apiMiddleware} from '../Redux/Middleware/api'
import {composeWithDevTools} from 'redux-devtools-extension';


export const create = () => {

    const apiMiddle = composeWithDevTools(applyMiddleware(apiMiddleware))

    return createStore(reducer, apiMiddle)
}






// export const create = () => {

//     return createStore(
//         reducer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
// }
