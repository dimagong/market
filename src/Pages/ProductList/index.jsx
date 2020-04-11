import React, {useState, useEffect} from "react";

import { Card } from "./Blocks/index";

import { Layout,  Row, Col, Divider } from "antd";

import { Data } from './Data';

const { Header, Footer, Content } = Layout;

const data = Data;


export const ProductList = ({shopping}) => {

  
  
  const [cartList, addToCartList] = useState([]);
  const onAppendNewCart = (secondCart) => addToCartList([...cartList, secondCart]);
  console.log('cartList', cartList);

  useEffect(() => {
    //shopping(cartList);
  });
  
 

  const renderCart = (itemToCard, onAppendNewCart) => {
    return (
      <Col className="gutter-row" span={6}  key={itemToCard.id}>
        <Card  item={itemToCard}  onAppendNewCart={onAppendNewCart}  />   
      </Col>
    );
  };

  
  
  return (
    <Layout style={{ minHeight: "100vh"}}>

      <Header>Header</Header>

      <Content> 

        <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal'}}>
            sub-element align full
        </Divider>
        
        {/* style={{ display: "flex", alignItems:  "center"}} */}
        <Row justify="space-between"  with="90%">
            {data.map(item => {
              return renderCart(item, onAppendNewCart);
            })}
        </Row>

      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};
