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

import { Data as dataDefault } from '../access/data/Data';

function App({      data, 
                    onsetProducts,
                    onselectItem, 
                    selectedItem, 
                    cart, changeData, 
                    createLogin, name, 
                    password, email}) {

  useEffect( () => {
    return data.lenght || onsetProducts(dataDefault)
  },[]);
                      
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <ProductList  changeData={changeData} data={data}  onselectItem={onselectItem} cart={cart} />
          {/* <ProductList   /> */} 
        </Route>

        <Route path="/details" > 
          <ProductDetail item={selectedItem} />
        </Route>

        <Route path="/cart" >
          <Cartcomponent  cart={cart} data={data}/>
          {/* <Cartcomponent   /> */}
        </Route>

        <Route path="/login" exact render = {
           () => name ? 
           (<Redirect to='/' />) 
           : 
           (<LoginComponent  createLogin={createLogin} 
            nameStore={name}
            passwordStore={password}
            emailStore={email}
            />)}
        />
        
        
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
      email: store.login.email   
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


