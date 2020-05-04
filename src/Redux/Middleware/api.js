import axios from 'axios'
//import {merge} from 'lodash'

import {API_REQUEST} from '../Actions/api'
//import {setDataBase} from '../../firebase/firebase.config'


const apiCall = (   {
                    
                    url = 'https://market-db-41f10.web.app/',      
                    //url = 'https://shopserver.firebaseapp.com',
                    endpoint = '', 
                    method = '', 
                    body = [], 
                    headers = {}
                    } 
                ) => {

    const methodLower = method.toLowerCase()
    
    const instance = axios.create({
        baseURL: url,
        headers
      });
   
   
    return new Promise( (resolve, reject) => {
        instance[methodLower]( endpoint, body)
        .then( response => resolve(response) )
        .catch ( error => reject(error) )
    })
} 




export const apiMiddleware = (store) => next => action => {
    
    if(action.type !== API_REQUEST || !action.apiData){
        return next(action);
    }

    console.log('action', action);
    
    const {
        url,
        endpoint,
        method,
        body,
        headers,
        types
    } = action.apiData;

    

    next({
        type: types.REQUEST
    })
    

    const onSuccess = (response) => {

       console.log('response', response);
        //const res = response.data.oprducts;
        var res;
        if(response.data.products) {
            res = response.data.products;
        }else {
            res = response.data.name;
        } 
        
        
        next({
            type: types.SUCCESS,
            res
        })

        //setDataBase();
    }

    const onError = (err) => {

        var errorType = '';
       if(err.data && err.status === 401) errorType="Unauthorized";
        
        console.log('errorType', errorType);
        
        next({
            type: types.FAIL,
            errorType
        })

    }

    apiCall( { url, endpoint, method, body, headers, types } )
    .then(onSuccess, onError)
    .catch( err => console.log('err', err))
}




