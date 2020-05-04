import React from 'react'

import { Col, Card as CardComponent } from "antd"

import LayoutComponent from '../../Lauout/layout.component' 

const { Meta } = CardComponent; 

const Cartcomponent = ({cart}) => {

    
    const title = ( <p>
                        {
                            Object.keys(cart).length !== 0 ?
                            <p style={{fontSize: 20}}>THIS IS YOUR CHOICE</p>
                            :
                            <p style={{marginTop: '30%', fontSize: 40}}>'YOU  HAVEN`T SELECTED ANYTHING YET'</p>
                        }
                    </p>);

    const content = cart.map(item => {
                return (
                        <Col className="gutter-row" span={6}
                            style={{ marginLeft: '15px', }}
                            key={item.id} >
                            <CardComponent
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" 
                                        src={item.image}
                                        style={{ height: 280 }} 
                                        />}
                            > 
                            <Meta title={`$ ${item.price}`}  />
                            <Meta title={` QUANTITY: ${item.count}`}   />
                            <Meta title={` TOTAL: $ ${item.count * item.price}`}   />
                            </CardComponent>
                        </Col>
                    );
                       })
                  
  
    return (
        <LayoutComponent  content={content} title={title} />
    );
}

export default Cartcomponent;
