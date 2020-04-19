import React from "react";

import { Button} from "antd";
import {
    DollarOutlined,
    FieldNumberOutlined,
    HomeOutlined,
    DollarCircleOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    WomanOutlined
  } from '@ant-design/icons';



export const ButtonCounter = ({ count, price }) => {


    return (

        <>
            <Button type="primary" danger>
                TOTAL
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
