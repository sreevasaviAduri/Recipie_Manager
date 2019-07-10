import React from "react";
import "antd/dist/antd.css";
import "../styles.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
import AddNewRecipie from "./AddNewRecipie";
import ShowRecipies from "./ShowRecipies";

const { Header, Sider, Content } = Layout;

const MainPage = props => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => props.history.push("/")}>
            <Icon type="right" />
            <span>Recipie Manager</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => props.history.push("/show")}>
            <Link to={{ pathname: "/show" }}>
              <Icon type="unordered-list" />
              <span>Show Recipies</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => props.history.push("/add")}>
            <Icon type="plus-circle" />
            <span>Add Recipie</span>
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
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPage;
