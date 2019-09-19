import React from "react";
import "antd/dist/antd.css";
import { Layout, Icon, Input, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { logIn } from "../actions/auth";

const { Header, Content } = Layout;

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Header style={{ background: "#69c0ff", padding: 0 }}>
        <h1 style={{ marginLeft: 10 }}>Recipie Manager</h1>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
          style={{ width: 250, display: "block" }}
        />
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
          style={{ width: 250, marginTop: 10, display: "block" }}
        />
        <Checkbox style={{ marginTop: 10, marginRight: 10 }}>
          Remember me
        </Checkbox>
        <Button
          type="primary"
          size="small"
          htmlType="submit"
          className="login-form-button"
          style={{ width: 250 }}
          onClick={() => dispatch(logIn())}
        >
          Log in
        </Button>
      </Content>
    </Layout>
  );
};

export default LoginPage;
