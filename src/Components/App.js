import React, {useEffect} from "react"
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


import "./App.css";
import ProductList from "./ProductList/index"
import { ProductDetail} from "./ProductDetails/index"
import Cartcomponent from "./Carts/carts.component"
import LoginComponent from "./Authorize/LogIn/log-in.component"

import { actionCart } from "../Redux/Actions/actionCart"
import { actionLogin } from "../Redux/Actions/actionLogin"
import { selectItem } from "../Redux/Actions/products"
import { setProducts } from "../Redux/Actions/products"

//import { Data as dataDefault } from '../access/data/Data';

function App({      data, 
                    onsetProducts,
                    onselectItem, 
                    selectedItem, 
                    cart, changeData, 
                    createLogin, name, 
                    password, email, isLoader}) {

  useEffect( () => {
    //return data.lenght || onsetProducts(dataDefault)
    return data.lenght || onsetProducts()
  },[]);
                      
  return (
    <Router>
      <Switch>

        <Route path="/market" exact>
          <ProductList  changeData={changeData} data={data}  onselectItem={onselectItem} cart={cart} />
          {/* <ProductList   /> */} 
        </Route> 

        <Route path="/market/details" > 
          <ProductDetail item={selectedItem} />
        </Route>

        <Route path="/market/cart" >
          <Cartcomponent  cart={cart} data={data}/>
          {/* <Cartcomponent   /> */}
        </Route>

        <Route path="/market/login" exact render = {
           () => name ? 
           (<Redirect to='/market' />) 
           : 
           (<LoginComponent  createLogin={createLogin} 
            nameStore={name}
            passwordStore={password}
            emailStore={email}
            />)}
        />
        {/* { isLoader? <Loader /> : ''} */}
        
        
      </Switch>

    </Router> 
  );
}



const mapToProps = (store) => {
    console.log("store", store)
    return {
      selectedItem: store.products.selected,
      data: store.products.data,
      cart: store.cartlist.cart,
      name: store.login.name,
      password: store.login.password,  
      email: store.login.email,
      isLoader: store.products.isLoader  
    }
}

//const mapToDispatchStore = (dispatch) => ({
//  changeData: (item) => dispatch(actionCart(item)),
//  reateLogin: (login) => dispatch(actionLogin(login))
// })
const mapToDispatchStore = {
  changeData: actionCart,
  createLogin: actionLogin,
  onselectItem: selectItem,
  onsetProducts: setProducts
}

export default connect(mapToProps, mapToDispatchStore)(App);


