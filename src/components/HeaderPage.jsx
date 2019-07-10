import React from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import "../styles.css";
import AddNewRecipie from "./AddNewRecipie";
import ShowRecipies from "./ShowRecipies";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

const HeaderPage = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleHomeClick = () => {
    console.log("homeClick");
  };
  const handleShowClick = () => {
    console.log("Show Recipie click");
  };
  const handleAddRecipieClick = () => {
    console.log("Add Recipie Click");
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={handleHomeClick}>
            <Icon type="right" />
            <span>Recipie Manager</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={handleShowClick}>
            <Icon type="unordered-list" />
            <span>Show Recipies</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={handleAddRecipieClick}>
            <Icon type="plus-circle" />
            <span>Add Recipie</span>
          </Menu.Item>
        </Menu>
      </Sider>
      {/* <Layout>
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
          Welcome to Recipie Manager !!!
        </Content>
      </Layout> */}
    </Layout>
  );
};

export default HeaderPage;
