import {apiCall} from './api'
import {createAsyncAction} from '../../Helpers/redux'


export const SET_LOGIN = createAsyncAction('SET_LOGIN')


export const actionLogin = (login) => {
    return apiCall( {
        types: SET_LOGIN, 
        endpoint: '/register',
        method: 'POST',
        // headers: {'Content-Type': 'application/register'},
        body: {
            name: login.name,
            password: login.password,
            email: login.email
        }
    } )
}






// export const actionLogin = login => ({
//     type: 'SET_LOGIN',
//     name: login.name,
//     password: login.password,
//     email: login.email
// });