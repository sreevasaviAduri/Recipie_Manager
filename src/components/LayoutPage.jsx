import React from "react";
import "antd/dist/antd.css";
import "../styles.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, Icon, Typography, Row, Col } from "antd";
import { logOut } from "../actions/auth";

const { Header, Sider, Content } = Layout;

const { Title } = Typography;

const LayoutPage = props => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const recipies = useSelector(state => state.recipies);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={{ pathname: "/welcome" }}>
              <Icon type="right" />
              <span>Recipie Manager</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={{ pathname: "/show" }}>
              <Icon type="unordered-list" />
              <span>Show Recipies</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={{ pathname: "/add" }}>
              <Icon type="plus-circle" />
              <span>Add Recipie</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="logout" />
            <span onClick={() => dispatch(logOut())}>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Row>
            <Col span={6}>
              <Icon
                className="trigger"
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={toggle}
                span={6}
              />
            </Col>
            <Col span={12}>
              <Title title="Recipies">Recipies: {recipies.length}</Title>{" "}
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
