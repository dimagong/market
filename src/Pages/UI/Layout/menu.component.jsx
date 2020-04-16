import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Menu } from "antd";
import {
  HomeOutlined,
  DollarCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  
} from '@ant-design/icons';


export const MenuComponent = () => {

  const [collapsed, toggCollased] = useState(false);
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

                  <Link to='/details'>
                    <HomeOutlined />
                    <span>Details</span>
                  </Link>

                </Menu.Item>

                <Menu.Item key="2">
                  <DollarCircleOutlined  />
                  <span>Option 2</span>
                </Menu.Item>
              </Menu>

            </div>
  );
};
