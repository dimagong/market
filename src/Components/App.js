import React from "react"
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

//import { Data } from './ProductList/Data';

function App({data, onselectItem, 
                    selectedItem, 
                    cart, changeData, 
                    createLogin, name, 
                    password, email}) {


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

const mapToDispatchStore = (dispatch) => ({
  
  
  changeData: (item) => dispatch(actionCart(item)),

  createLogin: (login) => dispatch(actionLogin(login)),

  onselectItem: (item)=> dispatch({
    type: 'SELECT_ITEM', 
    item: item 
  })


})

export default connect(mapToProps, mapToDispatchStore)(App);


