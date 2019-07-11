import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configurestore from "./store/configurestore";
import "./styles.css";
import LayoutPage from "./components/LayoutPage";
import AddNewRecipie from "./components/AddNewRecipie";
import ShowRecipie from "./components/ShowRecipies";
import WelcomePage from "./components/WelcomePage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
const store = configurestore();

function AppRouting() {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} exact={true} />
      <Route path="/add" component={AddNewRecipie} />
      <Route path="/show" component={ShowRecipie} />
    </Switch>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <LayoutPage>
        <AppRouting />
      </LayoutPage>
    </BrowserRouter>
  </Provider>,
  rootElement
);
