import {apiCall} from './api'
import {createAsyncAction} from '../../Helpers/redux'


export const SELECT_ITEM = 'SELECT_ITEM'

export const selectItem = (item)=> (
    {
        type: SELECT_ITEM, 
        item: item 
    }
  )

  export const SET_PRODUCTS = createAsyncAction('SET_PRODUCTS')

  export const setProducts = () => (apiCall( 
    {types: SET_PRODUCTS, //type
      data}
  ))

  // without apiCall
//   export const setProducts = (data)=> (
//       {
//           type: SET_PRODUCTS, 
//           data
//       }
//     )

    
