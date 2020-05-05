import React from "react";
import { Link } from "react-router-dom";

import { Button} from "antd";
import {
    DollarOutlined,
    FieldNumberOutlined
  } from '@ant-design/icons';



export const ButtonCounter = ({ count, price }) => {


    return (

        <>
            <Button type="primary" danger>
                <Link to='/market/cart'>
                     TOTAL
                </Link>
            </Button>
            <Button danger  >
            <FieldNumberOutlined style={{ fontSize: '16px'}}  />
                {`${count}`}
            </Button>
            <Button danger>
            <DollarOutlined  style={{ fontSize: '16px' }} />
                {`${price}`}
            </Button>
        </> 
  );
};
