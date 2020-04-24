import {SET_PRODUCTS} from '../Actions/products';
import { SELECT_ITEM } from '../Actions/products';



const initialState = {
    data: [
        // {
        //   id: 1,
        //   name: "Brown Brim",
        //   image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        //   price: 25
        // },
        // {
        //   id: 2,
        //   name: "Blue Beanie",
        //   image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        //   price: 18
        // },
        // {
        //   id: 3,
        //   name: "Brown Cowboy",
        //   image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        //   price: 35
        // },
        // {
        //   id: 4,
        //   name: "Grey Brim",
        //   image: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        //   price: 25
        // },
        // {
        //   id: 5,
        //   name: "Green Beanie",
        //   image: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        //   price: 18
        // },
        // {
        //   id: 6,
        //   name: "Palm Tree Cap",
        //   image: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        //   price: 14
        // },
        // {
        //   id: 7,
        //   name: "Red Beanie",
        //   image: "https://i.ibb.co/bLB646Z/red-beanie.png",
        //   price: 18
        // },
        // {
        //   id: 8,
        //   name: "Wolf Cap",
        //   image: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        //   price: 14
        // },
        // {
        //   id: 9,
        //   name: "Blue Snapback",
        //   image: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        //   price: 16
        // }
      ],

      selected: {},
      error: null,
      isLoader: false
}

const products = (state = initialState, action) => {
    switch(action.type){
      case SET_PRODUCTS:
        return {
            ...state,
            data: action.data
        }
      case SET_PRODUCTS.FAIL:
        return {
              ...state,
              isLoader: true
          }
      case SET_PRODUCTS.SUCCESS:
        return {
              ...state,
              isLoader: true
          }
      case SET_PRODUCTS.REQUEST:
         return {
                ...state,
                data: action.data
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
