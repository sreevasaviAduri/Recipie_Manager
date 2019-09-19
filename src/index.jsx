import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configurestore from "./store/configurestore";
import "./styles.css";
import LayoutPage from "./components/LayoutPage";
import AddNewRecipie from "./components/AddNewRecipie";
import ShowRecipie from "./components/ShowRecipies";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import { authUserLogIn, authUserLogOut } from "./actions/auth";
import { firebase } from "./firebase/firebase";

import { Router, Switch } from "react-router-dom";
import EditRecipie from "./components/EditRecipie";
import { startSetRecipies } from "./actions/recipies";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./routers/privateroute";
import PublicRoute from "./routers/publicroute";

const store = configurestore();
const history = createHistory();

function AppRouting() {
  return (
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/welcome" component={WelcomePage} />
      <PrivateRoute path="/add" component={AddNewRecipie} />
      <PrivateRoute path="/show" component={ShowRecipie} />
      <PrivateRoute path="/edit/:id" component={EditRecipie} />
    </Switch>
  );
}
const rootElement = document.getElementById("root");

let hasRenderd = false;

const jsxApp = (
  <Provider store={store}>
    <Router history={history}>
      <LayoutPage>
        <AppRouting />
      </LayoutPage>
    </Router>
  </Provider>
);

const appRender = () => {
  if (!hasRenderd) {
    render(jsxApp, rootElement);
    hasRenderd = true;
  }
};

const jsxAppLoading = (
  <Provider store={store}>
    <Router history={history}>
      <LayoutPage>Loading...</LayoutPage>
    </Router>
  </Provider>
);

const jsxLoginRender = (
  <Provider store={store}>
    <Router history={history}>
      <LoginPage />
    </Router>
  </Provider>
);
const loginRender = () => {
  render(jsxLoginRender, rootElement);
};

render(jsxAppLoading, rootElement);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(authUserLogIn(user.uid));
    store.dispatch(startSetRecipies()).then(() => {
      appRender();
      if (history.location.pathname === "/") {
        history.push("/welcome");
        window.location.reload();
      }
    });
  } else {
    store.dispatch(authUserLogOut());
    loginRender();
    history.push("/");
  }
});
