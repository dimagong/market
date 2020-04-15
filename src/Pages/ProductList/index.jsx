import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import { Card } from "./Blocks/index";

import { Layout,  Row, Col, Divider, Button } from "antd";

import { Data } from './Data';



const { Header, Footer, Content } = Layout;

const data = Data;

// ({shopping})
export const ProductList = ({changeData}) => {   

  
  const [countPrice, calculatorPrice] = useState( { price: 0, count: 0 } );
  const totalPriseIncrease = (nextCart) => {
    let nextCount = countPrice.count + 1;
    let nextPrice = nextCart.price + countPrice.price;
    calculatorPrice( { price: nextPrice, count: nextCount } )
    
  }

  
  const [cartList, addToCartList] = useState([]);

  // useEffect(() => {
  //   changeData(cartList);
  // }, []);
  changeData(cartList);

  const onAppendNewCart = (secondCart) =>{
    
    var number = cartList.find( (currentElem, i) => {
      return currentElem === secondCart;
    } );

    if(number){
      number.count += 1;
      console.log('number', number);
      addToCartList(cartList);
      console.log('cartList', cartList);

    }else{
      secondCart.count = 1;
      addToCartList( [...cartList, secondCart] )
    }

    totalPriseIncrease(secondCart);
    
  }
  
 
  //useEffect(
   
    //  () => { 
    //    return  changeData(cartList);
    //   },
    //   [...cartList]
   
  //);
 
 
  console.log('cartList', cartList);
  console.log('countPrice', countPrice);
  

  
  

  const renderCart = (itemToCard, onAppendNewCart) => {
    return (
      // <Col className="gutter-row" span={4}  key={itemToCard.id} >
      <Col className="gutter-row" span={5} style={{ marginLeft: '15px' } } key={itemToCard.id} >
        <Card  item={itemToCard}  onAppendNewCart={onAppendNewCart}  />   
      </Col>
    );
  };

  
  
  return (
    <Layout style={{ minHeight: "100vh"}}>

      <Header>
        <Button type="primary" danger>
          <Link to='/cart'>
              YOUR CART
          </Link>
        </Button>
        <Button danger>
           { `All GOODS : ${countPrice.count}`}
        </Button>
        <Button danger>
            { `TOTAL: $  ${countPrice.price}` }
        </Button>
        
      </Header>

      <Content> 

        <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal'}}>
        THE HIT OF THE SEASON
        </Divider>
        
        {/* style={{ display: "flex", alignItems:  "center"}} */}
        {/* <Row justify="space-around"  > */}
        <Row justify="space-around" gutter={[16, 24]}>
            {
              data.map(item => {
                return renderCart(item, onAppendNewCart);
              })
            }
        </Row>

      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};
