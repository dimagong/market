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

import { Data } from './ProductList/Data';

export default function App() {

  const data = Data;

  const [dataShop, updateData] = useState([]);
  const changeData = (dataList) => updateData(dataList);
  console.log('dataShop', dataShop);

  const [selectedItem, addselectItem] = useState([]);
  const onselectItem = (item) => addselectItem([...selectedItem, item])

  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <ProductList  changeData={changeData} data={data}  onselectItem={onselectItem} />
          {/* <ProductList   /> */} 
        </Route>

        <Route path="/details" > 
          <ProductDetail item={selectedItem} />
        </Route>

        <Route path="/cart" >
          <Cartcomponent  dataShop={dataShop} data={data}/>
          {/* <Cartcomponent   /> */}
        </Route>

 
      </Switch>

    </Router> 
  );
}


