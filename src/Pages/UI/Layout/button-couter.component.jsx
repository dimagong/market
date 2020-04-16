import React from "react";
import { Link } from "react-router-dom";

import { Button} from "antd";


export const ButtonCounter = ({ count, price }) => {


    return (

        <>
            <Button type="primary" danger>
                <Link to='/cart'>
                    YOUR CART
                </Link>
            </Button>
            <Button danger>
                {`All GOODS : ${count}`}
            </Button>
            <Button danger>
                {`TOTAL: $  ${price}`}
            </Button>
        </> 
  );
};
