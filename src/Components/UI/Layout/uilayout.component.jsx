import React from "react";


import { Layout, Row, Col, Divider } from "antd";



const { Header, Footer, Content } = Layout;


export const UiLayoutComponent = ({menu, buttoncount, content }) => {


  // const renderCart = (itemToCard, onAppendNewCart) => {
  //   return (
  //     <Col className="gutter-row" span={6} key={itemToCard.id} >
  //       <Card item={itemToCard} onAppendNewCart={onAppendNewCart} />
  //     </Col>
  //   );
  // };



  return (
    <Layout style={{ minHeight: "100vh" }}>

      <Header justify="space-around">
        <Row>
          <Col span={16}>{menu}</Col>
          <Col span={8}>{buttoncount}</Col>
        </Row>
      </Header>

      <Content style={{ width: "70%", marginLeft: '15%' }}>

        <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
          THE HIT OF THE SEASON
        </Divider>
        <Row justify="space-around" gutter={[16, 24]}>
          {
            content
            // data.map(item => {
            //   return renderCart(item, onAppendNewCart);
            // })
          }
        </Row>

      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};
