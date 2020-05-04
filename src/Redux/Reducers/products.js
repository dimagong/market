import {SET_PRODUCTS} from '../Actions/products';
import { SELECT_ITEM } from '../Actions/products';



const initialState = {
  data: [],
  selected: {},
  error: null,
  isLoader: false
}

const products = (state = initialState, action) => {
    switch(action.type){
      case SET_PRODUCTS.REQUEST:
        return {
            ...state,
            isLoader: true
            //data: action.data
            //data: [0]
        }
      
      case SET_PRODUCTS.SUCCESS:
        return {
            ...state,
            data: action.res
            //data: [0]
        }
      
      case SELECT_ITEM:
          return {
                ...state,
                selected: action.item
            }
           
      default: 
            return state;
            
    }
}
 
export default products;



// case SET_PRODUCTS.FAIL:
//         return {
//               ...state,
//               isLoader: true
//           }
//       case SET_PRODUCTS.SUCCESS:
//         return {
//               ...state,
//               isLoader: true
//           }
//       case SET_PRODUCTS.REQUEST:
//          return {
//                 ...state,
//                 data: action.data
//             }
