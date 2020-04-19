import {createStore} from "redux"


import reducer from './Reducers/index'



export const create = () => {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
}
