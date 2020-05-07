import {createStore, applyMiddleware} from "redux"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import reducer from './Reducers/index'

import {apiMiddleware} from '../Redux/Middleware/api'
import {composeWithDevTools} from 'redux-devtools-extension';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'cartlist']
    //blacklist: ['navigation']
  }

const persistedReducer = persistReducer(persistConfig, reducer)



export const create = () => {

    const apiMiddle = composeWithDevTools(applyMiddleware(apiMiddleware))
    let store = createStore(persistedReducer, apiMiddle)
    let persistor = persistStore(store)
    return { store, persistor } 

}



// export const create = () => {

//     const apiMiddle = composeWithDevTools(applyMiddleware(apiMiddleware))

//     return createStore(reducer, apiMiddle)
// }


// export const create = () => {

//     return createStore(
//         reducer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
// }
