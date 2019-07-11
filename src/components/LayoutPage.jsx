import React from "react";
import "antd/dist/antd.css";
import "../styles.css";
import { Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

const LayoutPage = props => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  console.log(props);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={{ pathname: "/" }}>
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
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
        {console.log("children props",props.children)}
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
