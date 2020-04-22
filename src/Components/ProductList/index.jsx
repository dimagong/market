import React from "react";
//import {connect} from 'react-redux'

import { Card } from "./Blocks/index";
import LayoutComponent from "../../Lauout/layout.component" ;
import { ButtonCounter } from "../../Lauout/button-couter.component";
import { MenuComponent } from "../../Lauout/menu.component";
import {TextBold} from '../ProductList/Blocks/styles';

import { Col } from "antd";


 const ProductList = ({ changeData, data, onselectItem, cart}) => {

  const priceCart = cart.reduce( 
    (accumulator, currentValue) => {
      return (accumulator + currentValue.totalprice );
    }, 
    0
  );

  const countCart = cart.reduce(
    (accumulator, currentValue) => {
      return (accumulator + currentValue.count );
    }, 
    0
  );

  const onAppendNewCart = (secondCart) => {
    
    var number = cart.find((currentElem, i) => {
      return currentElem === secondCart;
    });

    if (number) {
      number.count += 1;
      number.totalprice += number.price;
      //number.price += number.price;
      changeData([...cart]);
      
    } else {
      secondCart.count = 1;
      secondCart.totalprice = secondCart.price;
      changeData([...cart, secondCart]);
    }
  }

  const onDeleteCart = (deleteCart) => {
    
    if (deleteCart.count > 1) {
      deleteCart.totalprice =  deleteCart.totalprice - deleteCart.price ; 
      //deleteCart.price = deleteCart.price - (deleteCart.price / deleteCart.count) ;
      deleteCart.count -= 1;
      changeData([...cart]);
      
    } else {
      const restCarts = cart.filter( (el) => el !== deleteCart );
      changeData([...restCarts]);
    }
  }




  const renderCart = (item, onAppendNewCart, onDeleteCart, onselectItem) => {
    return (
      <Col className="gutter-row" span={6} key={item.id} >
        <Card item={item} 
              onAppendNewCart={onAppendNewCart} 
              onselectItem={onselectItem}
              onDeleteCart={onDeleteCart}      
        />
      </Col>
    );
  };

  const listCart = data.map(item => {
    return renderCart(item, onAppendNewCart, onDeleteCart, onselectItem);
  })

  const title = 'THE HIT OF THE SEASON';

  return (
  <LayoutComponent 

    menu={<MenuComponent />}  
    buttoncount={<ButtonCounter price={priceCart} count={countCart} />}  
    content={listCart } 
    title={ <TextBold> {title} </TextBold> } 
  
  />
  );
};

export default ProductList;