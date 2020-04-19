import React, {useState} from "react";
import {Link} from "react-router-dom";

import { Card as CardComponent, Button, Row, Col } from "antd";
import ReactCardFlip from 'react-card-flip';

import {TextWhite} from './styles';
import photo from '../../../images/photo.png';

const { Meta } = CardComponent;


export const Card = ({ item, onAppendNewCart, onDeleteCart, onselectItem }) => {

    const [isFlipped, changeFlipped] = useState(false);
    const onchangeFlipped = () => changeFlipped(!isFlipped);

    //  const [cartList, addToCartList] = useState({listcart});
    //  const onAppendNewCart = () => addToCartList([]);
    //  console.log('cartList', cartList);

   
    const onAddCart = () => {
        onAppendNewCart(item);
    }

    const onDelete = () => {
        onDeleteCart(item);
    }
    return (

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ height: 280 }} />}
                onClick={onchangeFlipped}
                
            >
                <Meta title={`$ ${item.price}`}  style={{ fontSize: 20 }} />
                
                <Row style={{ marginTop: 5 }}>
                <Col span={24}><TextWhite> {item.name} </TextWhite></Col>
                </Row>
                <Row style={{ width: 177, marginTop: 5 }}>
                    <Col span={12} ><Button type="primary" onClick={ onAddCart } >Add Cart</Button></Col>
                    <Col span={12} ><Button type="primary" danger onClick={ onDelete }>Delete Cart</Button></Col>               
                </Row>
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={photo} style={{ height: 280 }} />}
                onClick={onchangeFlipped}
                
            >
                {/* <Link to='/details'>
                    <Meta title={'item.name'}  />
                 </Link>  */}
                
                <Row style={{ marginTop: 55 }}>
                <Col span={24}><TextWhite> Great choice !!! </TextWhite></Col>
                </Row>
            </CardComponent>
        </ReactCardFlip>

    );

};
