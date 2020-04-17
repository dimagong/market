import React from 'react';
import {UiLayoutComponent} from "../UI/Layout/uilayout.component";

export const ProductDetail = ({item}) =>{

    console.log('item', item);
    //const content = item.map( el => el.name);
    const content =  item.name;

    return(
        <UiLayoutComponent  content={content}  />
    );
};