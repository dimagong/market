import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Divider } from "antd"

import { ReactComponent as Logo } from "../access/logo/crown.svg"

const { Header, Footer, Content } = Layout;


const LayoutComponent = ({ menu, buttoncount, content, title, name }) => {

  return (
    <Layout style={{ minHeight: "100vh" }}>

      <Header justify="space-around">
        <Row>
          <Col span={4}>{menu}</Col>
          <Col sm={2} xs={0} style={{ marginTop: 10 }}  >
            <Link to='/'>
              <Logo  />
            </Link>
          </Col>
          <Col sm={14} xs={16} style={{ textAlign: "end" }} >{buttoncount}</Col>
          <Col span={4} >
            <Link to='/login' style={{ color: 'white', textAlign: "end" }}>
              {
                name ?
                  <p>HELLO {name.toUpperCase()}  !</p>
                  :
                  <p>LOGIN</p>
              }
            </Link>
          </Col>
        </Row>
      </Header>

      <Content style={{ width: "70%", marginLeft: '15%' }}>

        <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
          {
            title
          }
        </Divider>
        <Row justify="center" gutter={[24, 24]} style={{paddingLeft: 20}}>
        
          {
            content
            // data.map(item => {
            //   return renderCart(item, onAppendNewCart);
            // })
          }
        </Row>

      </Content>

      <Footer style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
        <p>© 2020 DimaGong, Inc</p>
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ login: { name } }) => {
  return { name: name }
}
// store.login.name
export default connect(mapStateToProps)(LayoutComponent);