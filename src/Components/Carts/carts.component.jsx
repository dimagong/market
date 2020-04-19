import React from 'react'


import { Layout,  Row, Col, Divider, Card as CardComponent } from "antd";

 
const Cartcomponent = ({cart}) => {

    const { Header, Footer, Content } = Layout;
   // console.log('dataShop Cartcomponent', dataShop);
    
    return (
        <Layout style={{ minHeight: "100vh"}} >
            <Header>Header</Header>
            <Content>
                <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal'}}>
                        THE HIT OF THE SEASON
                </Divider>
                <Row justify="space-around" gutter={[16, 24]}>
                    {
                        cart.map(item => {
                            // return renderCart(item, onAppendNewCart);
                            return (<Col className="gutter-row" span={6} style={{ marginLeft: '15px' } } key={item.id} >
                                <CardComponent
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.image} style={{ height: 280 }} />}
                                >
                                </CardComponent>
                           </Col>);
                        })
                    }
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default Cartcomponent;
