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


   const [dataShop, updateData] = useState([]);
   const changeData = (dataList) => updateData(dataList);
  console.log('dataShop', dataShop);

  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <ProductList  changeData={changeData} />
          {/* <ProductList   /> */}
        </Route>

        <Route path="/details"  component={ProductDetail}/> 

        <Route path="/cart" >
          <Cartcomponent  dataShop={dataShop}/>
          {/* <Cartcomponent   /> */}
        </Route>

 
      </Switch>

    </Router> 
  );
}


