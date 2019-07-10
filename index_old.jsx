import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configurestore from "./store/configurestore";
import "./styles.css";
import MainPage from "./components/MainPage";
import HeaderPage from "./components/HeaderPage";
const store = configurestore();

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
