import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configurestore from "./store/configurestore";
import "./styles.css";
import MainPage from "./components/MainPage";
import AddNewRecipie from "./components/AddNewRecipie";
import ShowRecipie from "./components/ShowRecipies";
import HeaderPage from "./components/HeaderPage";
import { Row, Col } from "antd";

import { BrowserRouter, Route, Switch } from "react-router-dom";
const store = configurestore();

function AppRouting() {
  return (
    <Switch>
      {/* <Route path="/" component={MainPage} exact={true} /> */}
      <Route path="/add" component={AddNewRecipie} />
      <Route path="/show" component={ShowRecipie} />
    </Switch>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <MainPage>
        <AppRouting />
      </MainPage>
    </BrowserRouter>
  </Provider>,
  rootElement
);
