import React, { useState } from "react";


import { Card } from "./Blocks/index";
import {UiLayoutComponent} from "../UI/Layout/uilayout.component" ;
import { ButtonCounter } from "../UI/Layout/button-couter.component";
import { MenuComponent } from "../UI/Layout/menu.component";

import { Col } from "antd";




export const ProductList = ({ changeData, data, onselectItem }) => {

  
  const [countPrice, calculatorPrice] = useState({ price: 0, count: 0 });
  const totalPriseIncrease = (nextCart) => {
    let nextCount = countPrice.count + 1;
    let nextPrice = nextCart.price + countPrice.price;
    calculatorPrice({ price: nextPrice, count: nextCount })

  }


  const [cartList, addToCartList] = useState([]);

  changeData(cartList);

  const onAppendNewCart = (secondCart) => {

    var number = cartList.find((currentElem, i) => {
      return currentElem === secondCart;
    });

    if (number) {
      number.count += 1;
      console.log('number', number);
      addToCartList(cartList);
      console.log('cartList', cartList);

    } else {
      secondCart.count = 1;
      addToCartList([...cartList, secondCart])
    }

    totalPriseIncrease(secondCart);

  }


  console.log('cartList', cartList);
  console.log('countPrice', countPrice);




  const renderCart = (item, onAppendNewCart, onselectItem) => {
    return (
      <Col className="gutter-row" span={6} key={item.id} >
        <Card item={item} 
              onAppendNewCart={onAppendNewCart} 
              onselectItem={onselectItem}
              
        />
      </Col>
    );
  };

  const listCart = data.map(item => {
    return renderCart(item, onAppendNewCart, onselectItem);
  })



  return (
  <UiLayoutComponent 

    menu={<MenuComponent />}  
    buttoncount={<ButtonCounter price={countPrice.price} count={countPrice.count} />}  
    content={listCart }  
  
  />
  );
};
