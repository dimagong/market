import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Menu } from "antd";
import {
  HomeOutlined,
  DollarCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  WomanOutlined
} from '@ant-design/icons';


export const MenuComponent = () => {

  const [collapsed, toggCollased] = useState(true);
  const toggleCollapsed = () => toggCollased(!collapsed);

  return (


    <div style={{ width: 150 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" to='/cart'>

          <Link to='/cart'>
            <ShoppingCartOutlined />
            <span>YOUR CART</span>
          </Link>

        </Menu.Item>

        <Menu.Item key="2">
          <Link to='/details'>
          <ShoppingOutlined />
            <span>DETAILS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/details'>
            <WomanOutlined />
            <span>LIFE STYLE</span>
          </Link>
          </Menu.Item>
        <Menu.Item key="4">
          <Link to='/details'>
            <HomeOutlined />
            <span>CONTACT</span>
          </Link>
        </Menu.Item>
      </Menu>

    </div>
  );
};
