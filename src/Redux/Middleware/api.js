import axios from 'axios'
import {merger} from 'lodash'

import {API_REQUEST} from '../Actions/api'


const apiCall = (   {
                    url = 'https://shopserver.firebaseapp.com',
                    andpoint = '', 
                    method = 'GET', 
                    body = [], 
                    headers = {}
                    } 
                ) => {

    const methodLower = method.toLowerCase()
    axios.create(
        baseUrl = url,
        headers
    )
   
    return new Promise( (resolve, reject) => {
        axios[methodLower](andpoint, body)
        .then( response => resolve(response) )
        .catch ( error => reject(error) )
    })
} 



const nextAction = (action, data) =>{
    const next = merger({}, action, data);
    delete next[API_REQUEST];
    return next;
}

export default state => next => action => {
    if(action.type === API_REQUEST && !action.apiData) next(action)
    const {
        url,
        andpoint,
        method,
        body,
        headers,
        types
    } = action.data;

    nextAction(action, {
        type: types.REQUEST
    })

    const onSuccess = (response) => {

    }

    const onError = (error) => {

    }

    

    apiCall( { url, andpoint, method, body, headers, types } )
    .then(onSuccess, onError)
    .catch( err => console.log('err', err))
}



//const axios = require('axios').default;