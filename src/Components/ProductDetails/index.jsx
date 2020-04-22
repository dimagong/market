import React from 'react';
import LayoutComponent from "../../Lauout/layout.component"

export const ProductDetail = ({item}) =>{

    console.log('item', item);
    //const content = item.map( el => el.name);
    const content =  item.name;

    return(
        <LayoutComponent  content={content}  />
    );
};