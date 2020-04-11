import React, {useState} from "react";
import {Link} from "react-router-dom";

import { Card as CardComponent, Button } from "antd";
import ReactCardFlip from 'react-card-flip';

import {TextBold} from './styles';

const { Meta } = CardComponent;



export const Card = ({ item, onAppendNewCart }) => {

    const [isFlipped, changeFlipped] = useState(false);
    const onchangeFlipped = () => changeFlipped(!isFlipped);

    //  const [cartList, addToCartList] = useState({listcart});
    //  const onAppendNewCart = () => addToCartList([]);
  //console.log('cartList', cartList);

    
    return (

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ height: 280 }} />}
                onClick={onchangeFlipped}
                
            >
                <Link to='/details'>
                    <Meta title={item.name} />
                </Link>
                
                <Meta title={`$ ${item.price}`} />
                <TextBold>Text</TextBold>
                <Button type="primary" onClick={ () =>{ onAppendNewCart(item)} } >Add to Cart</Button>
                <Button type="primary" danger>Primary</Button>
                
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={'https://smhttp-ssl-77968-media.nexcesscdn.net/pub/media/catalog/product/cache/34388cf20c0b522cf37a8ea2ad6265a5/l/o/longhand-lp-cap_10600_nvard_12.jpg'} style={{ height: 280 }} />}
                onClick={onchangeFlipped}
                
            >
                <Link to='/details'>
                    <Meta title={'item.name'} />
                </Link>
                
                <Meta title={`$ ${item.price}`} />
                <Button type="primary">Primary</Button>
                <Button type="primary" danger>Primary</Button>
            </CardComponent>
        </ReactCardFlip>

    );

};
