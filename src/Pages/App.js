import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "./App.css";
import { ProductList } from "./ProductList/index";
import { ProductDetail} from "./ProductDetails/index";
import { Cartcomponent } from "./ProductList/Carts/carts.component";

export default function App() {


  const [kitShop, newItems] = useState([]);
  const shopping = (item) => newItems([...kitShop, item]);
  console.log('kitShop', kitShop);

  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <ProductList  shopping={shopping} />
        </Route>

        <Route path="/details"  component={ProductDetail}/> 

        <Route path="/cart" >
          <Cartcomponent  shopping={shopping} />
        </Route>

 
      </Switch>

    </Router> 
  );
}

